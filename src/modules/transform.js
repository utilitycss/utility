const applyRules = require("../util/applyRules");

const defaultNames = {
  trf: "trf",
  "trf:n": "trfn",
  trfo: "trfo",
  "trfs:f": "trfsf",
  "trfs:p": "trfsp"
};

const getRules = (names, cfg) => ({
  trf: { n: names["trf"], k: "transform", v: cfg.transformValues },
  "trf:n": { n: names["trf:n"], k: "transform", v: "none" },
  trfo: {
    n: names["trfo"],
    k: "transform-origin",
    v: cfg.transformOriginValues
  },
  "trfs:f": { n: names["trfs:f"], k: "transform-style", v: "flat" },
  "trfs:p": { n: names["trfs:p"], k: "transform-style", v: "preserve-3d" }
});

const meta = {
  module: "transform"
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
