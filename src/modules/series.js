const defineSeries = require('../util/defineSeries');
const responsive = require('../util/responsive');

const meta = {
  module: 'series',
};

module.exports = config => globalConfig => {
  const {
    property,
    className,
    values,
    isResponsive = false,
    variants = { '': '' },
  } = config;

  const {
    seriesSeparator = '',
    variantSeparator = '',
    breakPointSeparator = '',
    breakPoints = {},
  } =
    globalConfig || {};

  const series = defineSeries(className, property, values, {
    seriesSeparator,
    variantSeparator,
    variants,
    meta,
  });

  if (isResponsive) {
    return series.concat(
      responsive(series, breakPoints, {
        breakPointSeparator,
      }),
    );
  }

  return series;
};
