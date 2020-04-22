const applyRules = require("../util/applyRules");

const defaultNames = { "bxsh:n": "bxsh:n", bxsh: "bxsh" };

const getRules = (names, cfg) => ({
  "bxsh:n": {
    name: names["bxsh:n"],
    key: "box-shadow",
    value: "none"
  },
  bxsh: {
    name: names["bxsh"],
    key: "box-shadow",
    value: cfg.boxShadowValues
  }
});

const meta = {
  module: "box-shadow"
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
