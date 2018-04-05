const applyRules = require("../util/applyRules");

const defaultNames = {
  bd: "bd",
  "bd:n": "bdn",
  "bd:w": "bdw",
  "bd:s": "bds",
  "bdcl:c": "bdclc",
  "bdcl:s": "bdcls",
  bdi: "bdi",
  "bdi:n": "bdin",
  bdt: "bdt",
  "bdt:n": "bdt:n",
  bdr: "bdr",
  "bdr:n": "bdrn",
  bdb: "bdb",
  "bdb:n": "bdbn",
  bdl: "bdl",
  "bdl:n": "bdln",
  bdrs: "bdrs",
  bdtrrs: "bdtrrs",
  bdtlrs: "bdtlrs",
  bdbrrs: "bdbrrs",
  bdblrs: "bdblrs"
};

const getRules = (names, cfg) => ({
  bd: { name: names["bd"], key: "border", value: cfg.borderValues },
  "bd:n": { name: names["bd:n"], key: "border", value: "none" },
  "bd:w": {
    name: names["bd:w"],
    key: "border-width",
    value: cfg.borderWidthValues
  },
  "bd:s": {
    name: names["bd:s"],
    key: "border-style",
    value: cfg.borderStyleValues
  },
  "bdcl:c": {
    name: names["bdcl:c"],
    key: "border-collapse",
    value: "collapse"
  },
  "bdcl:s": {
    name: names["bdcl:s"],
    key: "border-collapse",
    value: "separate"
  },
  bdi: {
    name: names["bdi"],
    key: "border-image",
    value: cfg.borderImageValues
  },
  "bdi:n": { name: names["bdi:n"], key: "border-image", value: "none" },
  bdt: { name: names["bdt"], key: "border-top", value: cfg.borderTopValues },
  "bdt:n": { name: names["bdt:n"], key: "border-top", value: "none" },
  bdr: {
    name: names["bdr"],
    key: "border-right",
    value: cfg.borderRadiusValues
  },
  "bdr:n": { name: names["bdr:n"], key: "border-right", value: "none" },
  bdb: {
    name: names["bdb"],
    key: "border-bottom",
    value: cfg.borderBottomValues
  },
  "bdb:n": { name: names["bdb:n"], key: "border-bottom", value: "none" },
  bdl: { name: names["bdl"], key: "border-left", value: cfg.borderLeftValues },
  "bdl:n": { name: names["bdl:n"], key: "border-left", value: "none" },
  bdrs: {
    name: names["bdrs"],
    key: "border-radius",
    value: cfg.borderRadiusValues
  },
  bdtrrs: {
    name: names["bdtrrs"],
    key: "border-top-right-radius",
    value: cfg.borderTopRightRadiusValues
  },
  bdtlrs: {
    name: names["bdtlrs"],
    key: "border-top-left-radius",
    value: cfg.borderTopLeftRadiusValues
  },
  bdbrrs: {
    name: names["bdbrrs"],
    key: "border-bottom-right-radius",
    value: cfg.borderBottomRightRadiusValues
  },
  bdblrs: {
    name: names["bdblrs"],
    key: "border-bottom-left-radius",
    value: cfg.borderBottomLeftRadiusValues
  }
});

const meta = {
  module: "border"
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
