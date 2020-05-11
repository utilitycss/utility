const applyRules = require("../util/applyRules");

const defaultNames = {
  anim: "anim"
};

const getRules = (names, cfg) => ({
  anim: { name: names["anim"], key: "animation", value: cfg.values }
});

const meta = {
  module: "animation"
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
