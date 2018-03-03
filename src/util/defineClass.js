const postcss = require('postcss');

const escapeClassName = className =>
  className.replace(/([^A-Za-z0-9\-])/g, '\\$1');

module.exports = (name, props) => {
  const decls = Object.keys(props)
    .map(prop => postcss.decl({
      prop,
      value: props[prop],
    }));

    return postcss.rule({
        selector: `.${escapeClassName(name)}`,
    }).append(decls);
};