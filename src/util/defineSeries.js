const defineClass = require('./defineClass');

module.exports = (name, prop, values, options = {}) => {
  const {
    suffix = '',
    suffixSeparator = '',
    seriesSeparator = '',
  } = options;

  return Object.keys(values).map(value =>
    defineClass(`${name}${seriesSeparator}${value}${suffixSeparator}${suffix}`, {
      [`${prop}`]: values[value],
    }));
};