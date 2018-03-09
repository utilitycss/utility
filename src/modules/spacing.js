const applyRules = require('../util/applyRules');

const defaultNames = {
  m: 'm',
  'm:a': 'ma',
  mt: 'mt',
  'mt:a': 'mta',
  mr: 'mr',
  'mr:a': 'mra',
  mb: 'mb',
  'mb:a': 'mba',
  ml: 'ml',
  'ml:a': 'mla',
  p: 'p',
  pt: 'pt',
  pr: 'pr',
  pb: 'pb',
  pl: 'pl',
};

const getRules = (names, cfg) => ({
  m: { n: names['m'], k: 'margin', v: cfg.marginValues },
  'm:a': { n: names['m:a'], k: 'margin', v: 'auto' },
  mt: { n: names['mt'], k: 'margin-top', v: cfg.marginValues },
  'mt:a': { n: names['mt:a'], k: 'margin-top', v: 'auto' },
  mr: { n: names['mr'], k: 'margin-right', v: cfg.marginValues },
  'mr:a': { n: names['mr:a'], k: 'margin-right', v: 'auto' },
  mb: { n: names['mb'], k: 'margin-bottom', v: cfg.marginValues },
  'mb:a': { n: names['mb:a'], k: 'margin-bottom', v: 'auto' },
  ml: { n: names['ml'], k: 'margin-left', v: cfg.marginValues },
  'ml:a': { n: names['ml:a'], k: 'margin-left', v: 'auto' },
  p: { n: names['p'], k: 'padding', v: cfg.paddingValues },
  pt: { n: names['pt'], k: 'padding-top', v: cfg.paddingValues },
  pr: { n: names['pr'], k: 'padding-right', v: cfg.paddingValues },
  pb: { n: names['pb'], k: 'padding-bottom', v: cfg.paddingValues },
  pl: { n: names['pl'], k: 'padding-left', v: cfg.paddingValues },
});

const meta = {
  module: 'spacing',
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
