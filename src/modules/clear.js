const applyRules = require("../util/applyRules");

const defaultNames = {
  "cl:n": "cln",
  "cl:l": "cll",
  "cl:r": "clr",
  "cl:b": "clb"
};

const getRules = names => ({
  "cl:n": { name: names["cl:n"], key: "clear", value: "none" },
  "cl:l": { name: names["cl:l"], key: "clear", value: "left" },
  "cl:r": { name: names["cl:r"], key: "clear", value: "right" },
  "cl:b": { name: names["cl:b"], key: "clear", value: "both" }
});

const meta = {
  module: "clear"
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
