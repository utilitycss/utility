const path = require("path");
const saveFile = require("../helpers/save-file");

const buildDocPartials = require("../helpers/build-doc-partials");
const buildIndex = require("../helpers/build-index");
const traverse = require("../util/traverse");

module.exports = config => root => {
  const { output, openFile } = config || {};
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

    const packageName = "Utility";

    const {
      headHtml,
      navHtml,
      sidebarHtml,
      sectionsHtml,
      statsHtml
    } = buildDocPartials({
      packageName,
      modules,
      atomCss: root.toString()
    });

    const indexHtml = buildIndex({
      packageName,
      headHtml,
      navHtml,
      sidebarHtml,
      sectionsHtml,
      statsHtml
    });

    saveFile({
      content: indexHtml,
      filePath: output,
      dirPath,
      openFile
    });
  }

  return root;
};
