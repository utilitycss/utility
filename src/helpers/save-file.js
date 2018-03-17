const fs = require('fs');
const chalk = require('chalk');
module.exports = function({ content, filePath, dirPath }) {
  if (content === undefined) {
    console.error(chalk.red('The content of the file should not be empty'));
    process.exit(0);
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFileSync(filePath, content);
  console.error(chalk.blue(`Document was created : ${filePath}`));
};
