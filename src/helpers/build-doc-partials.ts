import buildCss from "./build-css";
import buildNav from "./build-nav";
import buildSidebar from "./build-sidebar";
import buildSections from "./build-sections";
import buildStats from "./build-stats";

import { Module } from "../plugins/docs";

/* Function which build all parts of the document */
export default async function buildDocPartials({
  packageName,
  modules,
  atomCss,
}: {
  packageName: string;
  modules: Module;
  atomCss: string;
}): Promise<{
  headHtml: string;
  navHtml: string;
  sidebarHtml: string;
  sectionsHtml: string[];
  statsHtml: string;
}> {
  // Build the <head>
  const headHtml = await buildCss({
    packageName,
    atomCss,
  });
  // Build the <TopNav>
  const navHtml = await buildNav({
    packageName,
  });
  // Build the <Sidebar>
  const sidebarHtml = await buildSidebar({
    modules,
  });
  // Build the <Sections>
  const sectionsHtml = await buildSections({
    modules,
  });
  // Build the <>
  const statsHtml = await buildStats({
    atomCss,
  });

  return {
    headHtml,
    navHtml,
    sidebarHtml,
    sectionsHtml,
    statsHtml,
  };
}
