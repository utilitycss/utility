const applyRules = require('../util/applyRules');

const defaultNames = {
  'bxz:cb': 'bxzcb',
  'bxz:bb': 'bxzbb',
};

const getRules = (names, cfg) => ({
  'bxz:cb': { n: names['bxz:cb'], k: 'box-sizing', v: 'content-box' },
  'bxz:bb': { n: names['bxz:bb'], k: 'box-sizing', v: 'border-box' },
});

module.exports = config => globalConfig => {
  return applyRules(config, globalConfig, defaultNames, getRules);
};
