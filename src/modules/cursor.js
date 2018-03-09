const applyRules = require('../util/applyRules');

const defaultNames = {
  'cur:a': 'cura',
  'cur:d': 'curd',
  'cur:c': 'curc',
  'cur:ha': 'curha',
  'cur:he': 'curhe',
  'cur:m': 'curm',
  'cur:p': 'curp',
  'cur:t': 'curt',
};

const getRules = (names, cfg) => ({
  'cur:a': { n: names['cur:a'], k: 'cursor', v: 'auto' },
  'cur:d': { n: names['cur:d'], k: 'cursor', v: 'default' },
  'cur:c': { n: names['cur:c'], k: 'cursor', v: 'crosshair' },
  'cur:ha': { n: names['cur:ha'], k: 'cursor', v: 'hand' },
  'cur:he': { n: names['cur:he'], k: 'cursor', v: 'help' },
  'cur:m': { n: names['cur:m'], k: 'cursor', v: 'move' },
  'cur:p': { n: names['cur:p'], k: 'cursor', v: 'pointer' },
  'cur:t': { n: names['cur:t'], k: 'cursor', v: 'text' },
});

const meta = {
  module: 'cursor',
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
