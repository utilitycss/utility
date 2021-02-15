import path from "path";
import _ from "lodash";
import { promises as fsAsync } from "fs";

import { Module } from "../plugins/docs";

export default async function buildSidebar({
  modules,
}: {
  modules: Module;
}): Promise<string> {
  const sidebarTemplate = _.template(
    await fsAsync.readFile(
      path.join(__dirname, "templates", "sidebar.html"),
      "utf-8"
    )
  );
  const sidebarHtml = sidebarTemplate({
    links: Object.keys(modules).map((module) => _.capitalize(module)),
  });
  return sidebarHtml;
}
