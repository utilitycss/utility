const path = require("path");
const _ = require("lodash");
const fs = require("fs");

module.exports = function({
  headHtml,
  navHtml,
  sidebarHtml,
  sectionsHtml,
  packageName
}) {
  const indexTemplate = _.template(
    fs.readFileSync(path.join(__dirname, "templates", "index.html"), "utf8")
  );
  const indexHtml = indexTemplate({
    packageName,
    head: headHtml,
    nav: navHtml,
    sidebar: sidebarHtml,
    sections: sectionsHtml
  });

  return indexHtml;
};
