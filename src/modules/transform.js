const applyRules = require("../util/applyRules");

const defaultNames = {
  trf: "trf",
  "trf:n": "trfn",
  trfo: "trfo",
  "trfs:f": "trfsf",
  "trfs:p": "trfsp"
};

const getRules = (names, cfg) => ({
  trf: { name: names["trf"], key: "transform", value: cfg.transformValues },
  "trf:n": { name: names["trf:n"], key: "transform", value: "none" },
  trfo: {
    name: names["trfo"],
    key: "transform-origin",
    value: cfg.transformOriginValues
  },
  "trfs:f": { name: names["trfs:f"], key: "transform-style", value: "flat" },
  "trfs:p": {
    name: names["trfs:p"],
    key: "transform-style",
    value: "preserve-3d"
  }
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
