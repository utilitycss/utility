const defineClass = require('../util/defineClass');
const responsive = require('../util/responsive');

module.exports = config => {
  const {
    className,
    props,
    isResponsive = false,
    breakPoints = {},
    seriesSeparator = '',
    breakPointSeparator = '',
  } = config;

  const single = [defineClass(className, props)];

  if (isResponsive) {
    return single.concat(responsive(single, breakPoints, {
      breakPointSeparator,
    }));
  }

  return single;
};