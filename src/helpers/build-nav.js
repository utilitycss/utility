const path = require("path");
const fs = require("fs");
const _ = require("lodash");
module.exports = function({ packageName }) {
  const navTemplate = _.template(
    fs.readFileSync(path.join(__dirname, "templates", "nav.html"), "utf8")
  );
  const navHtml = navTemplate({
    packageName
  });

  return navHtml;
};
