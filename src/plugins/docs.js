const fs = require("fs");
const path = require("path");
const saveFile = require("../helpers/save-file");

module.exports = config => root => {
  const { output, openFile } = config || {};

  const modules = {};

  let content = "";

  root.walkRules(rule => {
    const { meta: { module } } = rule;
    if (Array.isArray(modules[module])) {
      modules[module].push(rule);
    } else {
      modules[module] = [rule];
    }
  });

  const links = Object.keys(modules).map(m => {
    return `<li class="index-item"><a href="#${m}">${m}</a></li>`;
  });

  const index = `<div class=index><ul class="index-list">${links.join(
    ""
  )}</ul></div>`;

  content += index;

  const defs = Object.keys(modules).map(m => {
    const rules = modules[m].map(r => {
      return `<div class="rule ${r.selector.replace(".", "")}">${
        r.selector
      }</div><div class="code">{ ${r.nodes}; }</div>`;
    });

    return `<h1><a name="${m}">${m}</a></h1>${rules.join("")}`;
  });

  defs.forEach(d => (content += d));

  if (output) {
    const { dir: dirPath } = path.parse(output);
    saveFile({
      content,
      filePath: output,
      dirPath,
      openFile
    });
  } else {
    process.stdout.write(content);
  }

  return root;
};
