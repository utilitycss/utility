import path from "path";
import saveFile from "../helpers/save-file";

import buildDocPartials from "../helpers/build-doc-partials";
import buildIndex from "../helpers/build-index";
import traverse from "../util/traverse";

export default (config) => async (root) => {
  const { output, openFile } = config || {};
  const modules = {};

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
