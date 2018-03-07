const applyRules = require('../util/applyRules');

const defaultNames = {
  'v:v': 'vv',
  'v:h': 'vh',
  'v:c': 'vc',
};

const getRules = (names, cfg) => ({
  'v:v': { n: names['v:v'], k: 'visibility', v: 'visible' },
  'v:h': { n: names['v:h'], k: 'visibility', v: 'hidden' },
  'v:c': { n: names['v:c'], k: 'visibility', v: 'collapse' },
});

const meta = {
  module: 'visibility',
};

module.exports = config => globalConfig => {
  return applyRules({ config, globalConfig, defaultNames, getRules, meta });
};
