const applyRules = require("../util/applyRules");

const defaultNames = {
  "tx:o": "txo"
};

const getRules = (names, cfg) => ({
  trf: {
    name: names["tx:o"],
    key: "text-overflow",
    value: cfg.textOverflowValues
  }
});

const meta = {
  module: "text-overflow"
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
