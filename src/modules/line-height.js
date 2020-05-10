const applyRules = require("../util/applyRules");

const defaultNames = {
  lh: "lh"
};

const getRules = (names, cfg) => ({
  lh: { name: names["lh"], key: "line-height", value: cfg.values }
});

const meta = {
  module: "line-height"
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
