import path from "path";
import _ from "lodash";
import { promises as fsAsync } from "fs";

interface BuildIndex {
  headHtml: string;
  navHtml: string;
  sidebarHtml: string;
  sectionsHtml: string[];
  statsHtml: string;
  packageName: string;
}

export default async function ({
  headHtml,
  navHtml,
  sidebarHtml,
  sectionsHtml,
  statsHtml,
  packageName,
}: BuildIndex): Promise<string> {
  const indexTemplate = _.template(
    await fsAsync.readFile(
      path.join(__dirname, "templates", "index.html"),
      "utf-8"
    )
  );
  const indexHtml = indexTemplate({
    packageName,
    head: headHtml,
    nav: navHtml,
    sidebar: sidebarHtml,
    sections: sectionsHtml,
    stats: statsHtml,
  });

  return indexHtml;
}
