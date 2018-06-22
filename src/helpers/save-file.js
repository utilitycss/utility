const fs = require("fs");
const opn = require("opn");
const chalk = require("chalk");
module.exports = function({ content, filePath, dirPath, openFile = false }) {
  if (content === undefined) {
    // eslint-disable-next-line no-console
    console.error(chalk.red("The content of the file should not be empty"));
    process.exit(0);
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFileSync(filePath, content);
  // eslint-disable-next-line no-console
  console.log(chalk.blue(`Document was created : ${filePath}`));
  if (openFile) {
    opn(filePath, { app: ["google-chrome", "--incognito"] });
  }
};
