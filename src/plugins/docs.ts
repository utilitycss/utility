import path from "path";
import { promises as fsAsync } from "fs";
import saveFile from "../helpers/save-file";
import { Root } from "postcss";

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

    const newHtml = await fsAsync
      .readFile(
        path.join(
          path.dirname(require.resolve("@utilitycss/electron-doc")),
          "index.html"
        ),
        "utf-8"
      )
      .then((html) => html.replace(/\$resultData/, JSON.stringify(modules)));

    await saveFile({
      content: newHtml,
      filePath: output,
      dirPath,
      openFile,
    });
  }

  return root;
};
