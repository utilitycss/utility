const applyRules = require('../util/applyRules');

const defaultNames = {
  ol: 'ol',
  'ol:n': 'oln',
  olo: 'olo',
  olw: 'olw',
  'olw:tn': 'olwtn',
  'olw:m': 'olwm',
  'olw:tk': 'olwtk',
  olc: 'olc',
  'olc:i': 'olci',
};

const getRules = (names, cfg) => ({
  ol: { n: names['ol'], k: 'outline', v: cfg.outlineValues },
  'ol:n': { n: names['ol:n'], k: 'outline', v: 'none' },
  olo: { n: names['olo'], k: 'outline-offset', v: cfg.outlineOffsetValues },
  olw: { n: names['olw'], k: 'outline-width', v: cfg.outlineWidthValues },
  'olw:tn': { n: names['olw:tn'], k: 'outline-width', v: 'thin' },
  'olw:m': { n: names['olw:m'], k: 'outline-width', v: 'medium' },
  'olw:tk': { n: names['olw:tk'], k: 'outline-width', v: 'thick' },
  olc: { n: names['olc'], k: 'outline-color', v: cfg.outlineColorValues },
  'olc:i': { n: names['olc:i'], k: 'outline-color', v: 'invert' },
});

const meta = {
  module: 'outline',
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
