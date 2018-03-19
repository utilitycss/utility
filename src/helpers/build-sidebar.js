const path = require('path');
const _ = require('lodash');
const fs = require('fs');
module.exports = function({ modules }) {
  const sidebarTemplate = _.template(
    fs.readFileSync(path.join(__dirname, 'templates', 'sidebar.html'), 'utf8'),
  );
  const sidebarHtml = sidebarTemplate({
    links: Object.keys(modules).map(module => _.capitalize(module)),
  });
  return sidebarHtml;
};
