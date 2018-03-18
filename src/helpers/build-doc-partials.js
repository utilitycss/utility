const buildCss = require("./build-css");
const buildNav = require("./build-nav");
const buildSidebar = require("./build-sidebar");
const buildSections = require("./build-sections");
const buildIndex = require("./build-index");

module.exports = function({ packageName, modules, atomCss }) {
  const headHtml = buildCss({
    packageName,
    atomCss
  });
  const navHtml = buildNav({
    packageName
  });
  const sidebarHtml = buildSidebar({
    modules
  });
  const sectionsHtml = buildSections({
    modules
  });

  return {
    headHtml,
    navHtml,
    sidebarHtml,
    sectionsHtml
  };
};
