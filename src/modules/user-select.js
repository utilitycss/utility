const applyRules = require("../util/applyRules");

const defaultNames = {
  "us:n": "us:n",
  "us:au": "us:au",
  "us:t": "us:t",
  "us:c": "us:c",
  "us:a": "us:a"
};

const getRules = names => ({
  "us:n": { name: names["us:n"], key: "user-select", value: "none" },
  "us:au": { name: names["us:au"], key: "user-select", value: "auto" },
  "us:t": { name: names["us:t"], key: "user-select", value: "text" },
  "us:c": { name: names["us:c"], key: "user-select", value: "contain" },
  "us:a": { name: names["us:a"], key: "user-select", value: "all" }
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
