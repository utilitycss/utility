const applyRules = require('../util/applyRules');

const defaultNames = {
  'pos:s': 'poss',
  'pos:a': 'posa',
  'pos:r': 'posr',
  'pos:f': 'posf',
  t: 't',
  't:a': 'ta',
  r: 'r',
  'r:a': 'ra',
  b: 'b',
  'b:a': 'ba',
  l: 'l',
  'l:a': 'la',
};

const getRules = (names, cfg) => ({
  'pos:s': { n: names['pos:s'], k: 'postion', v: 'static' },
  'pos:a': { n: names['pos:a'], k: 'position', v: 'absolute' },
  'pos:r': { n: names['pos:r'], k: 'position', v: 'relative' },
  'pos:f': { n: names['pos:f'], k: 'position', v: 'fixed' },
  t: { n: names['t'], k: 'top', v: cfg.topValues },
  't:a': { n: names['t:a'], k: 'top', v: 'auto' },
  r: { n: names['r'], k: 'right', v: cfg.rightValues },
  'r:a': { n: names['r:a'], k: 'right', v: 'auto' },
  b: { n: names['b'], k: 'bottom', v: cfg.bottomValues },
  'b:a': { n: names['b:a'], k: 'bottom', v: 'auto' },
  l: { n: names['l'], k: 'left', v: cfg.leftValues },
  'l:a': { n: names['l:a'], k: 'left', v: 'auto' },
});

const meta = {
  module: 'position',
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
