import path from "path";
import saveFile from "../helpers/save-file";
import { Root } from "postcss";

import buildDocPartials from "../helpers/build-doc-partials";
import buildIndex from "../helpers/build-index";
import traverse, { CreatedNode } from "../util/traverse";

import { GlobalUtilityConfig } from "../types";

export interface Module {
  [key: string]: Array<CreatedNode>;
}

export default (
  config: Pick<GlobalUtilityConfig, "output" | "openFile">
) => async (root: Root): Promise<Root> => {
  const { output, openFile } = config || {};
  const modules: Module = {};

  traverse(root, (node) => {
    const {
      meta: { module },
    } = node;
    if (Array.isArray(modules[module])) {
      modules[module].push(node);
    } else {
      modules[module] = [node];
    }
  });

  if (output) {
    const { dir: dirPath } = path.parse(output);

    const packageName = "Utility";

    const {
      headHtml,
      navHtml,
      sidebarHtml,
      sectionsHtml,
      statsHtml,
    } = await buildDocPartials({
      packageName,
      modules,
      atomCss: root.toString(),
    });

    const indexHtml = await buildIndex({
      packageName,
      headHtml,
      navHtml,
      sidebarHtml,
      sectionsHtml,
      statsHtml,
    });

    await saveFile({
      content: indexHtml,
      filePath: output,
      dirPath,
      openFile,
    });
  }

  return root;
};
