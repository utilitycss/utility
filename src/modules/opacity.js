const applyRules = require('../util/applyRules');

const defaultNames = {
  op: 'op',
};

const getRules = (names, cfg) => ({
  op: { n: names['op'], k: 'opacity', v: cfg.values },
});

const meta = {
  module: 'opacity',
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
