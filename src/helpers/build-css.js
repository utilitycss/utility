const path = require('path');
const fs = require('fs');
const _ = require('lodash');
module.exports = function({ packageName, atomCss }) {
  const cssFile = fs.readFileSync(
    path.join(__dirname, 'templates', 'theme.css'),
    'utf8',
  );
  const headTemplate = _.template(
    fs.readFileSync(path.join(__dirname, 'templates', 'head.html'), 'utf8'),
  );
  const headHtml = headTemplate({
    packageName,
    cssFile,
    atomCss,
  });

  return headHtml;
};
