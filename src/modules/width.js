const applyRules = require("../util/applyRules");

const defaultNames = {
  w: "w",
  "w:a": "wa",
  maw: "maw",
  "maw:n": "mawn",
  miw: "miw"
};

const getRules = (names, cfg) => ({
  w: { name: names["w"], key: "width", value: cfg.widthValues },
  "w:a": { name: names["w:a"], key: "width", value: "auto" },
  maw: { name: names["maw"], key: "max-width", value: cfg.maxWidthValues },
  "maw:n": { name: names["maw:n"], key: "max-width", value: "none" },
  miw: { name: names["miw"], key: "min-width", value: cfg.minWidthValues }
});

const meta = {
  module: "width"
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
