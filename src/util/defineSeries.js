const defineClass = require("./defineClass");

module.exports = (name, prop, values, options = {}) => {
  const {
    seriesSeparator = "",
    pseudoClassesSeparator = "",
    pseudoClasses = [],
    meta = {}
  } = options;

  return [""].concat(pseudoClasses).reduce((prev, pseudo) => {
    const separator = pseudo !== "" ? pseudoClassesSeparator : "";
    const pseudoClass = pseudo.replace(/:/g, "");
    const nodes = Object.keys(values).map(value =>
      defineClass(
        `${name}${seriesSeparator}${value}${separator}${pseudoClass}${pseudo}`,
        {
          [`${prop}`]: values[value]
        },
        meta
      )
    );
    return prev.concat(nodes);
  }, []);
};
