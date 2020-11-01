import path from "path";
import { promises as fsAsync } from "fs";
import _ from "lodash";

interface BuildCSS {
  packageName: string;
  atomCss: string;
}

export default async function ({
  packageName,
  atomCss,
}: BuildCSS): Promise<string> {
  const cssFile = await fsAsync.readFile(
    path.join(__dirname, "templates", "theme.css"),
    "utf-8"
  );
  const headTemplate = _.template(
    await fsAsync.readFile(
      path.join(__dirname, "templates", "head.html"),
      "utf-8"
    )
  );
  const headHtml = headTemplate({
    packageName,
    cssFile,
    atomCss,
  });

  return headHtml;
}
