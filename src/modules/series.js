const defineSeries = require('../util/defineSeries');
const responsive = require('../util/responsive');

module.exports = config => {
  const {
    property,
    className,
    values,
    isResponsive = false,
    breakPoints = {},
    suffix = '',
    suffixSeparator = '',
    seriesSeparator = '',
    breakPointSeparator = '',
  } = config;

  const series = defineSeries(className, property, values, {
    suffix,
    suffixSeparator,
    seriesSeparator,
  });

  if (isResponsive) {
    return series.concat(responsive(series, breakPoints, {
        breakPointSeparator,
    }));
  }

  return series;
}