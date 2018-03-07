const applyRules = require('../util/applyRules');

const defaultNames = {
  'cl:n': 'cln',
  'cl:l': 'cll',
  'cl:r': 'clr',
  'cl:b': 'clb',
};

const getRules = (names, cfg) => ({
  'cl:n': { n: names['cl:n'], k: 'clear', v: 'none' },
  'cl:l': { n: names['cl:l'], k: 'clear', v: 'left' },
  'cl:r': { n: names['cl:r'], k: 'clear', v: 'right' },
  'cl:b': { n: names['cl:b'], k: 'clear', v: 'both' },
});

const meta = {
  module: 'clear',
};

module.exports = config => globalConfig => {
  return applyRules({ config, globalConfig, defaultNames, getRules, meta });
};
