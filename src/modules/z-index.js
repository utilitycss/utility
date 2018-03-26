const applyRules = require("../util/applyRules");

const defaultNames = {
  z: "z",
  "z:a": "za"
};

const getRules = (names, cfg) => ({
  z: { name: names["z"], key: "z-index", value: cfg.values },
  "z:a": { name: names["z:a"], key: "z-index", value: "auto" }
});

const meta = {
  module: "z-index"
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
