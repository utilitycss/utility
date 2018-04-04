const applyRules = require("../util/applyRules");

const defaultNames = {
  h: "h",
  "h:a": "wa",
  mah: "mah",
  "mah:n": "mahn",
  mih: "mih"
};

const getRules = (names, cfg) => ({
  h: { name: names["h"], key: "height", value: cfg.heightValues },
  "h:a": { name: names["h:a"], key: "height", value: "auto" },
  mah: { name: names["mah"], key: "max-height", value: cfg.maxHeightValues },
  "mah:n": { name: names["mah:n"], key: "max-height", value: "none" },
  mih: { name: names["mih"], key: "min-height", value: cfg.minHeightValues }
});

const meta = {
  module: "height"
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
