const defineClass = require('./defineClass');

module.exports = (name, prop, values, suffix = '') => {
  return Object.keys(values).map(value =>
    defineClass(`${name}${value}${suffix}`, {
      [`${prop}`]: values[value],
    }));
};