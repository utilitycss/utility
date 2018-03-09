const applyRules = require('../util/applyRules');

const defaultNames = {
  z: 'z',
  'z:a': 'za',
};

const getRules = (names, cfg) => ({
  z: { n: names['z'], k: 'z-index', v: cfg.values },
  'z:a': { n: names['z:a'], k: 'z-index', v: 'auto' },
});

const meta = {
  module: 'z-index',
};

module.exports = config => globalConfig => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};
