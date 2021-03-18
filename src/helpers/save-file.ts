// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require("debug")("utility:save-file");

import fs from "fs";
import { promises as fsAsync } from "fs";
import open from "open";
import chalk from "chalk";

interface SaveFile {
  content: string;
  filePath: string;
  dirPath: string;
  openFile?: boolean;
}

export default async function saveFile({
  content,
  filePath,
  dirPath,
  openFile = false,
}: SaveFile): Promise<void> {
  if (content === undefined) {
    console.error(chalk.red("The content of the file should not be empty"));
    process.exit(1);
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, {
      recursive: true,
    });
  }
  await fsAsync.writeFile(filePath, content);
  debug(`Document was created : ${filePath}`);
  if (openFile) {
    open(filePath, { app: ["google-chrome", "--incognito"] });
  }
}
