const defineSeries = require('../util/defineSeries');

module.exports = config => {
    const {
        property,
        className,
        values,
        responsive = false,
    } = config;

    return defineSeries(className, property, values);
}