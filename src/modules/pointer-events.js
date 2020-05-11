const applyRules = require("../util/applyRules");

const defaultNames = {
  "pe:n": "pe:n",
  "pe:a": "pe:a"
};

const getRules = names => ({
  "pe:n": { name: names["pe:n"], key: "pointer-events", value: "none" },
  "pe:a": { name: names["pe:a"], key: "pointer-events", value: "auto" }
});

const meta = {
  module: "pointer-events"
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
