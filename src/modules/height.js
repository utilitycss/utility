const applyRules = require('../util/applyRules');

const defaultNames = {
  h: 'h',
  'h:a': 'wa',
  mah: 'mah',
  'mah:n': 'mahn',
  mih: 'mih',
};

const getRules = (names, cfg) => ({
  h: { n: names['h'], k: 'height', v: cfg.heightValues },
  'h:a': { n: names['h:a'], k: 'height', v: 'auto' },
  mah: { n: names['mah'], k: 'max-height', v: cfg.maxHeightValues },
  'mah:n': { n: names['mah:n'], k: 'max-height', v: 'none' },
  mih: { n: names['mih'], k: 'max-height', v: cfg.minHeightValues },
});

module.exports = config => globalConfig => {
  return applyRules(config, globalConfig, defaultNames, getRules);
};
