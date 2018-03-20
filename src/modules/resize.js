const applyRules = require("../util/applyRules");

const defaultNames = {
  "rsz:n": "rszn",
  "rsz:b": "rszb",
  "rsz:h": "rszh",
  "rsz:v": "rszv"
};

const getRules = (names, cfg) => ({
  "rsz:n": { n: names["rsz:n"], k: "resize", v: "none" },
  "rsz:b": { n: names["rsz:b"], k: "resize", v: "both" },
  "rsz:h": { n: names["rsz:h"], k: "resize", v: "horizontal" },
  "rsz:v": { n: names["rsz:v"], k: "resize", v: "vertical" }
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
