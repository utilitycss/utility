const applyRules = require("../util/applyRules");

const defaultNames = {
  "li:sy": "lisy"
};

const getRules = (names, cfg) => ({
  "li:sy": {
    name: names["li:sy"],
    key: "list-style",
    value: cfg.listStyleValues
  }
});

const meta = {
  module: "list-style"
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
