const applyRules = require("../util/applyRules");

const defaultNames = {
  "v:v": "vv",
  "v:h": "vh",
  "v:c": "vc"
};

const getRules = names => ({
  "v:v": { name: names["v:v"], key: "visibility", value: "visible" },
  "v:h": { name: names["v:h"], key: "visibility", value: "hidden" },
  "v:c": { name: names["v:c"], key: "visibility", value: "collapse" }
});

const meta = {
  module: "visibility"
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
