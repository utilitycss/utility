const applyRules = require('../util/applyRules');

const defaultNames = {
  w: 'w',
  'w:a': 'wa',
  maw: 'maw',
  'maw:n': 'mawn',
  miw: 'miw',
};

const getRules = (names, cfg) => ({
  w: { n: names['w'], k: 'width', v: cfg.widthValues },
  'w:a': { n: names['w:a'], k: 'width', v: 'auto' },
  maw: { n: names['maw'], k: 'max-width', v: cfg.maxWidthValues },
  'maw:n': { n: names['maw:n'], k: 'max-width', v: 'none' },
  miw: { n: names['miw'], k: 'max-width', v: cfg.minWidthValues },
});

const meta = {
  module: 'width',
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
