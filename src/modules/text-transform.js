const applyRules = require("../util/applyRules");

const defaultNames = {
  "tt:n": "ttn",
  "tt:c": "ttc",
  "tt:u": "ttu",
  "tt:l": "ttl"
};

const getRules = names => ({
  "tt:n": { n: names["tt:n"], k: "text-transform", v: "none" },
  "tt:c": { n: names["tt:c"], k: "text-transform", v: "capitalize" },
  "tt:u": { n: names["tt:u"], k: "text-transform", v: "uppercase" },
  "tt:l": { n: names["tt:l"], k: "text-transform", v: "lowercase" }
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
