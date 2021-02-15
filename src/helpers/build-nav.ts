import path from "path";
import { promises as fsAsync } from "fs";
import _ from "lodash";

export default async function buildNav({
  packageName,
}: {
  packageName: string;
}): Promise<string> {
  const navTemplate = _.template(
    await fsAsync.readFile(
      path.join(__dirname, "templates", "nav.html"),
      "utf8"
    )
  );
  const navHtml = navTemplate({
    packageName,
  });

  return navHtml;
}
