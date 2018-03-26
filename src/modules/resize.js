const applyRules = require("../util/applyRules");

const defaultNames = {
  "rsz:n": "rszn",
  "rsz:b": "rszb",
  "rsz:h": "rszh",
  "rsz:v": "rszv"
};

const getRules = names => ({
  "rsz:n": { name: names["rsz:n"], key: "resize", value: "none" },
  "rsz:b": { name: names["rsz:b"], key: "resize", value: "both" },
  "rsz:h": { name: names["rsz:h"], key: "resize", value: "horizontal" },
  "rsz:v": { name: names["rsz:v"], key: "resize", value: "vertical" }
});

const meta = {
  module: "resize"
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
