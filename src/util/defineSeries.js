const defineClass = require('./defineClass');

module.exports = (name, prop, values, options = {}) => {
  const {
    seriesSeparator = '',
    variantSeparator = '',
    variants = { '': '' },
  } = options;

    return Object.keys(variants).reduce((prev, variant) => {
        const separator = variant !== '' ? variantSeparator : '';
        const varianNodes = Object.keys(values).map(value =>
            defineClass(`${name}${separator}${variant}${seriesSeparator}${value}`, {
                [`${prop}${variants[variant]}`]: values[value],
            }));
        return prev.concat(varianNodes);
    }, []);
};