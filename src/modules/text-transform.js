const applyRules = require("../util/applyRules");

const defaultNames = {
  "tt:n": "ttn",
  "tt:c": "ttc",
  "tt:u": "ttu",
  "tt:l": "ttl"
};

const getRules = names => ({
  "tt:n": { name: names["tt:n"], key: "text-transform", value: "none" },
  "tt:c": { name: names["tt:c"], key: "text-transform", value: "capitalize" },
  "tt:u": { name: names["tt:u"], key: "text-transform", value: "uppercase" },
  "tt:l": { name: names["tt:l"], key: "text-transform", value: "lowercase" }
});

const meta = {
  module: "text-transform"
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
