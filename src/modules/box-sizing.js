const applyRules = require("../util/applyRules");

const defaultNames = {
  "bxz:cb": "bxzcb",
  "bxz:bb": "bxzbb"
};

const getRules = names => ({
  "bxz:cb": { name: names["bxz:cb"], key: "box-sizing", value: "content-box" },
  "bxz:bb": { name: names["bxz:bb"], key: "box-sizing", value: "border-box" }
});

const meta = {
  module: "box-sizing"
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
