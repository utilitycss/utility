const fs = require('fs');
const path = require('path');
const saveFile = require('../helpers/save-file');

const _ = require('lodash');

const buildDocPartials = require('../helpers/build-doc-partials');
const buildIndex = require('../helpers/build-index');

module.exports = config => root => {
  const { output, openFile } = config || {};
  const { nodes } = root;
  const modules = {};

  const traverseObject = (node, media) => {
    const { meta: { module } = {}, selector, nodes, type } = node;
    const nodeToPush = Object.assign(
      {},
      { selector, nodes, type },
      media !== undefined
        ? {
            media: media,
          }
        : {},
    );
    if (Array.isArray(modules[module])) {
      modules[module].push(nodeToPush);
    } else {
      modules[module] = [nodeToPush];
    }
  };
  const traverseNodes = (nodes, media) => {
    nodes.forEach(node => {
      if (node.hasOwnProperty('name') && node.name === 'media') {
        const { params: media, nodes } = node;
        traverseNodes(nodes, media);
      } else {
        traverseObject(node, media);
      }
    });
  };
  traverseNodes(nodes);

  if (output) {
    const { dir: dirPath } = path.parse(output);

    // LODASH Template
    const packageName = 'Utility';
    const templateFolder = path.join(__dirname, '..', 'helpers', 'templates');

    const {
      headHtml,
      navHtml,
      sidebarHtml,
      sectionsHtml,
      statsHtml,
    } = buildDocPartials({
      packageName,
      modules,
      atomCss: root.toString(),
    });

    const indexHtml = buildIndex({
      packageName,
      headHtml,
      navHtml,
      sidebarHtml,
      sectionsHtml,
      statsHtml,
    });

    saveFile({
      content: indexHtml,
      filePath: output,
      dirPath,
      openFile,
    });
  } else {
    process.stdout.write(content);
  }

  return root;
};
