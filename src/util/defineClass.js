const postcss = require("postcss");

const escapeClassName = className =>
  className.replace(/([^A-Za-z0-9\-\:\_])/g, "\\$1"); //eslint-disable-line

module.exports = (name, props, meta = {}) => {
  const decls = Object.keys(props).map(prop =>
    postcss.decl({
      prop,
      value: props[prop]
    })
  );

  return postcss
    .rule({
      selector: `.${escapeClassName(name)}`,
      meta
    })
    .append(decls);
};
