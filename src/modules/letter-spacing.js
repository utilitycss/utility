const applyRules = require("../util/applyRules");

const defaultNames = {
  lts: "lts",
  "lts:n": "lts:n"
};

const getRules = (names, cfg) => ({
  lts: { name: names["lts"], key: "letter-spacing", value: cfg.values },
  "lts:n": { name: names["lts:n"], key: "letter-spacing", value: "normal" }
});

const meta = {
  module: "letter-spacing"
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
