import path from "path";
import traverse, { CreatedNode } from "../util/traverse";
import saveFile from "../helpers/save-file";

import { Root } from "postcss";
import { GlobalUtilityConfig } from "../types";

export default (config: Pick<GlobalUtilityConfig, "output">) => (
  root: Root
): Root => {
  const { output } = config || {};
  const modules: {
    [key: string]: Pick<CreatedNode, "meta"> & {
      nodes: Array<Omit<CreatedNode, "nodes">>;
    };
  } = {};
  traverse(root, (node) => {
    const { meta, ...rest } = node;
    const { module } = meta;
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
