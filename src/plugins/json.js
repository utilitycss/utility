const path = require("path");
const traverse = require("../util/traverse");
const saveFile = require("../helpers/save-file");

module.exports = config => root => {
  const { output } = config || {};
  const modules = {};
  traverse(root, node => {
    const {
      meta: { module }
    } = node;
    if (Array.isArray(modules[module])) {
      modules[module].push(node);
    } else {
      modules[module] = [node];
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
