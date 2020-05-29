const defineClass = require("./defineClass");
const template = require("./template");

module.exports = (name, prop, values, options = {}) => {
  const {
    seriesSeparator = "",
    pseudoClassesSeparator = "",
    pseudoClasses = [],
    meta = {},
    classTemplate = "{}"
  } = options;

  return [""].concat(pseudoClasses).reduce((prev, pseudo) => {
    const pseudoSeparator = pseudo !== "" ? pseudoClassesSeparator : "";
    const separator = name !== "" ? seriesSeparator : "";
    const pseudoClass = pseudo.replace(/:/g, "");
    const nodes = Object.keys(values).map(value =>
      defineClass(
        template(
          classTemplate,
          `${name}${separator}${value}${pseudoSeparator}${pseudoClass}${pseudo}`
        ),
        {
          [`${prop}`]: values[value]
        },
        meta
      )
    );
    return prev.concat(nodes);
  }, []);
};
