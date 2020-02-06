const path = require("path");
const traverse = require("../util/traverse");
const saveFile = require("../helpers/save-file");

module.exports = config => root => {
  const { output } = config || {};
  const modules = {};
  traverse(root, node => {
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
      dirPath
    });
  }
};
