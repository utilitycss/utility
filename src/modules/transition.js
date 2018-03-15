const applyRules = require('../util/applyRules');

const defaultNames = {
  trs: 'trs',
  trsde: 'trsde',
  trsdu: 'trsdu',
  trsp: 'trsp',
  'trsp:n': 'trspn',
  'trsp:a': 'trspa',
  trstf: 'trstf',
};

const getRules = (names, cfg) => ({
  trs: { n: names['trs'], k: 'transition', v: cfg.transitionValues },
  trsde: {
    n: names['trsde'],
    k: 'transition-delay',
    v: cfg.transitionDelayValues,
  },
  trsdu: {
    n: names['trsdu'],
    k: 'transition-duration',
    v: cfg.transitionDurationValues,
  },
  trsp: {
    n: names['trsp'],
    k: 'transition-property',
    v: cfg.transitionPropertyValues,
  },
  'trsp:n': {
    n: names['trsp:n'],
    k: 'transition-property',
    v: 'none',
  },
  'trsp:a': {
    n: names['trsp:a'],
    k: 'transition-property',
    v: 'all',
  },
  trstf: {
    n: names['trstf'],
    k: 'transition-timing-function',
    v: cfg.transitionTimingFunctionValues,
  },
});

const meta = {
  module: 'transition',
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
