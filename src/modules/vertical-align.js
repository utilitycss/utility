const applyRules = require("../util/applyRules");

const defaultNames = {
  "va:sup": "vasup",
  "va:t": "vat",
  "va:tt": "vatt",
  "va:m": "vam",
  "va:bl": "vabl",
  "va:b": "vab",
  "va:tb": "vatb",
  "va:sub": "vasub"
};

const getRules = (names, cfg) => ({
  "va:sup": { n: names["va:sup"], k: "vertical-align", v: "super" },
  "va:t": { n: names["va:t"], k: "vertical-align", v: "top" },
  "va:tt": { n: names["va:tt"], k: "vertical-align", v: "text-top" },
  "va:m": { n: names["va:m"], k: "vertical-align", v: "middle" },
  "va:bl": { n: names["va:bl"], k: "vertical-align", v: "baseline" },
  "va:b": { n: names["va:b"], k: "vertical-align", v: "bottom" },
  "va:tb": { n: names["va:tb"], k: "vertical-align", v: "text-bottom" },
  "va:sub": { n: names["va:sub"], k: "vertical-align", v: "sub" }
});

const meta = {
  module: "vertical-align"
};

module.exports = config => globalConfig => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta)
  });
};
