const defineClass = require('./defineClass');
const defineSeries = require('./defineSeries');
const responsive = require('./responsive');

const defaultNames = {
  'pos:s': 'poss',
  'pos:a': 'posa',
  'pos:r': 'posr',
  'pos:f': 'posf',
};

const getRules = (names, cfg) => ({
  'pos:s': { n: names['pos:s'], k: 'postion', v: 'static' },
  'pos:a': { n: names['pos:a'], k: 'position', v: 'absolute' },
  'pos:r': { n: names['pos:r'], k: 'position', v: 'relative' },
  'pos:f': { n: names['pos:f'], k: 'position', v: 'fixed' },
});

module.exports = (config, globalConfig, defaultNames, getRules) => {
  const { names = {}, whitelist = [], blacklist = [], isResponsive = false } =
    config || {};

  const {
    breakPoints = {},
    breakPointSeparator = '',
    variantSeparator = '',
    seriesSeparator = '',
  } =
    globalConfig || {};

  const customNames = Object.assign({}, defaultNames, names);
  const customRules = getRules(customNames, config || {});

  const enabledRules =
    whitelist.length > 0
      ? Object.keys(customRules)
          .filter(r => whitelist.includes(r))
          .filter(r => !blacklist.includes(r))
      : Object.keys(customRules).filter(r => !blacklist.includes(r));

  let result = enabledRules.reduce((p, r) => {
    const rule = customRules[r];
    if (Array.isArray(rule.v) || typeof rule.v === 'object') {
      p = p.concat(
        defineSeries(rule.n, rule.k, rule.v, {
          seriesSeparator,
          variantSeparator,
        }),
      );
    } else if (typeof rule.v === 'string' || typeof rule.v === 'number') {
      p = p.concat(defineClass(rule.n, { [`${rule.k}`]: rule.v }));
    }
    return p;
  }, []);

  if (isResponsive) {
    result = result.concat(
      responsive(result, breakPoints, {
        breakPointSeparator,
      }),
    );
  }

  return result;
};
