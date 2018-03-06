const applyRules = require('../util/applyRules');

const defaultNames = {
    'fl:n': 'fln',
    'fl:l': 'fll',
    'fl:r': 'flr',
};

const getRules = (names, cfg) => ({
    'fl:n': { n: names['fl:n'], k: 'float', v: 'none' },
    'fl:l': { n: names['fl:l'], k: 'float', v: 'left' },
    'fl:r': { n: names['fl:r'], k: 'float', v: 'right' },
});

module.exports = config => globalConfig => {
    return applyRules(config, globalConfig, defaultNames, getRules);
}