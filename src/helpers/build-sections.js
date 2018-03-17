const path = require("path");
const _ = require("lodash");
const fs = require("fs");

module.exports = function({ modules }) {
  const sectionTemplate = _.template(
    fs.readFileSync(path.join(__dirname, "templates", "section.html"), "utf8")
  );
  const sectionsHtml = [];
  Object.keys(modules).forEach(module => {
    const moduleName = module[0].toUpperCase() + module.slice(1);
    const rules = [];
    modules[module].forEach(rule => {
      // console.log(JSON.stringify(rule));
      const { nodes, selector, media } = rule;
      rules.push({
        selector,
        nodes,
        media,
        class: selector.replace(".", "")
      });
    });
    const sectionHtml = sectionTemplate({
      module: moduleName,
      rules
    });
    sectionsHtml.push(sectionHtml);
  });

  return sectionsHtml;
};
