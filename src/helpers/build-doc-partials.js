const buildCss = require("./build-css");
const buildNav = require("./build-nav");
const buildSidebar = require("./build-sidebar");
const buildSections = require("./build-sections");
const buildStats = require("./build-stats");

/* Function which build all parts of the document */
module.exports = function({ packageName, modules, atomCss }) {
  // Build the <head>
  const headHtml = buildCss({
    packageName,
    atomCss
  });
  // Build the <TopNav>
  const navHtml = buildNav({
    packageName
  });
  // Build the <Sidebar>
  const sidebarHtml = buildSidebar({
    modules
  });
  // Build the <Sections>
  const sectionsHtml = buildSections({
    modules
  });
  // Build the <>
  const statsHtml = buildStats({
    atomCss
  });

  return {
    headHtml,
    navHtml,
    sidebarHtml,
    sectionsHtml,
    statsHtml
  };
};
