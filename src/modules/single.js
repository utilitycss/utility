const defineClass = require('../util/defineClass');
const responsive = require('../util/responsive');

module.exports = config => globalConfig => {
  const { className, props, isResponsive = false } = config || {};

  const { seriesSeparator = '', breakPointSeparator = '', breakPoints = {} } =
    globalConfig || {};

  const single = [defineClass(className, props)];

  if (isResponsive) {
    return single.concat(
      responsive(single, breakPoints, {
        breakPointSeparator,
      }),
    );
  }

  return single;
};
