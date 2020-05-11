const applyRules = require("../util/applyRules");

const defaultNames = {
  us: "us"
};

const getRules = (names, cfg) => ({
  us: { name: names["us"], key: "user-select", value: cfg.values }
});

const meta = {
  module: "user-select"
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
