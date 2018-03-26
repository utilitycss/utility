const applyRules = require("../util/applyRules");

const defaultNames = {
  "fl:n": "fln",
  "fl:l": "fll",
  "fl:r": "flr"
};

const getRules = names => ({
  "fl:n": { name: names["fl:n"], key: "float", value: "none" },
  "fl:l": { name: names["fl:l"], key: "float", value: "left" },
  "fl:r": { name: names["fl:r"], key: "float", value: "right" }
});

const meta = {
  module: "float"
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
