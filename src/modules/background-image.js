const applyRules = require('../util/applyRules');

const defaultNames = {
  bgi: 'bgi',
  'bgi:n': 'bgin',
  'bgr:n': 'bgrn',
  'bgr:x': 'bgrx',
  'bgr:y': 'bgry',
  'bgr:sp': 'bgrsp',
  'bgr:rd': 'bgrrd',
  'bga:f': 'bgaf',
  'bga:s': 'bgas',
  bgp: 'bgp',
  bgpx: 'bgpx',
  bgpy: 'bgpy',
  'bgcp:bb': 'bgcpbb',
  'bgcp:pb': 'bgcppb',
  'bgcp:cb': 'bgcpcb',
  'bgo:bb': 'bgobb',
  'bgo:pb': 'bgopb',
  'bgo:cb': 'bgocb',
  'bgsz:a': 'bgsza',
  'bgsz:ct': 'bgszct',
  'bgsz:cv': 'bgszcv',
};

const getRules = (names, cfg) => ({
  bgi: { n: names['bgi'], k: 'background-image', v: cfg.backgroundImageValues },
  'bgi:n': { n: names['bgi:n'], k: 'background-image', v: 'none' },
  'bgr:n': { n: names['bgr:n'], k: 'background-repeat', v: 'no-repeat' },
  'bgr:x': { n: names['bgr:x'], k: 'background-repeat', v: 'repeat-x' },
  'bgr:y': { n: names['bgr:y'], k: 'background-repeat', v: 'repeat-y' },
  'bgr:rd': { n: names['bgr:rd'], k: 'background-repeat', v: 'round' },
  'bga:f': { n: names['bga:f'], k: 'background-attachment', v: 'fixed' },
  'bga:s': { n: names['bga:s'], k: 'background-attachment', v: 'scroll' },
  bgp: {
    n: names['bgp'],
    k: 'background-position',
    v: cfg.backgroundPostionValues,
  },
  bgpx: {
    n: names['bgpx'],
    k: 'background-position-x',
    v: cfg.backgroundPostionXValues,
  },
  bgpy: {
    n: names['bgpy'],
    k: 'background-position-y',
    v: cfg.backgroundPostionYValues,
  },
  'bgcp:bb': { n: names['bgcp:bb'], k: 'background-clip', v: 'border-box' },
  'bgcp:pb': { n: names['bgcp:pb'], k: 'background-clip', v: 'padding-box' },
  'bgcp:cb': { n: names['bgcp:cb'], k: 'background-clip', v: 'content-box' },
  'bgo:bb': { n: names['bgo:bb'], k: 'background-origin', v: 'border-box' },
  'bgo:pb': { n: names['bgo:pb'], k: 'background-origin', v: 'padding-box' },
  'bgo:cb': { n: names['bgo:cb'], k: 'background-origin', v: 'content-box' },
  'bgsz:a': { n: names['bgsz:a'], k: 'background-size', v: 'auto' },
  'bgsz:ct': { n: names['bgsz:ct'], k: 'background-size', v: 'contain' },
  'bgsz:cv': { n: names['bgsz:cv'], k: 'background-size', v: 'cover' },
});

const meta = {
  module: 'background-image',
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
