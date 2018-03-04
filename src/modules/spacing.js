const defineClass = require('../util/defineClass');
const defineSeries = require('../util/defineSeries');
const responsive = require('../util/responsive');

module.exports = config => {
  const {
    autoClassName = 'a',
    margin: {
      enabled: marginEnabled = true,
      auto: marginAuto = true,
      variants: marginVariants = { '': '' },
      className: marginClassName = 'm',
      values: marginValues = [],
      isResponsive: isMarginResponsive = false,
    } = {},
    padding: {
      enabled: paddingEnabled = true,
      auto: paddingAuto = true,
      variants: paddingVariants = { '': ''},
      className: paddingClassName = 'p',
      values: paddingValues = [],
      isResponsive: isPaddingResponsive = false,
    } = {},
    seriesSeparator = '',
    variantSeparator = '',
    breakPointSeparator = '',
    breakPoints = {},
  } = config || {};

  let result = [];

  if (marginEnabled) {
    const mVals = marginAuto
      ? Object.assign({}, marginValues, { [`${autoClassName}`]: 'auto' })
      : marginValues;
      const margins = defineSeries(marginClassName, 'margin', mVals, {
        seriesSeparator,
        variantSeparator,
        variants: marginVariants,
      });
    result = result.concat(margins);

    if (isMarginResponsive) {
      result = result.concat(responsive(margins, breakPoints, {
        breakPointSeparator,
      }));
    }
  }

  if (paddingEnabled) {
    const pVals = paddingAuto
      ? Object.assign({}, paddingValues, { [`${autoClassName}`]: 'auto' })
      : paddingValues;
      const paddings = defineSeries(paddingClassName, 'padding', pVals, {
        seriesSeparator,
        variantSeparator,
        variants: paddingVariants,
      });
    result = result.concat(paddings);

    if (isMarginResponsive) {
      result = result.concat(responsive(paddings, breakPoints, {
        breakPointSeparator,
      }));
    }
  }

  return result;
};