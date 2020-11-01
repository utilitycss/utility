import path from "path";
import traverse from "../util/traverse";
import saveFile from "../helpers/save-file";

import { Root, ChildNode } from "postcss";
import { GlobalUtilityConfig } from "../types";

export default (config: Pick<GlobalUtilityConfig, "output">) => (
  root: Root
): Root => {
  const { output } = config || {};
  const modules = {};
  traverse(root, (node: ChildNode) => {
    const {
      meta,
      meta: { module },
      ...rest
    } = node;
    if (modules[module]) {
      modules[module].nodes.push(rest);
    } else {
      modules[module] = { meta, nodes: [rest] };
    }
  });

  if (output) {
    const { dir: dirPath } = path.parse(output);

    saveFile({
      content: JSON.stringify(modules),
      filePath: output,
      dirPath,
    });
  }

  return root;
};
