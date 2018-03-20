const applyRules = require("../util/applyRules");

const defaultNames = {
  bd: "bd",
  "bd:n": "bdn",
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
  bd: { n: names["bd"], k: "border", v: cfg.borderValues },
  "bd:n": { n: names["bd:n"], k: "border", v: "none" },
  "bdcl:c": { n: names["bdcl:c"], k: "border-collapse", v: "collapse" },
  "bdcl:s": { n: names["bdcl:s"], k: "border-collapse", v: "separate" },
  bdi: { n: names["bdi"], k: "border-image", v: cfg.borderImageValues },
  "bdi:n": { n: names["bdi:n"], k: "border-image", v: "none" },
  bdt: { n: names["bdt"], k: "border-top", v: cfg.borderTopValues },
  "bdt:n": { n: names["bdt:n"], k: "border-top", v: "none" },
  bdr: { n: names["bdr"], k: "border-right", v: cfg.borderRightValues },
  "bdr:n": { n: names["bdr:n"], k: "border-right", v: "none" },
  bdb: { n: names["bdb"], k: "border-bottom", v: cfg.borderBottomValues },
  "bdb:n": { n: names["bdb:n"], k: "border-bottom", v: "none" },
  bdl: { n: names["bdl"], k: "border-left", v: cfg.borderLeftValues },
  "bdl:n": { n: names["bdl:n"], k: "border-left", v: "none" },
  bdrs: { n: names["bdrs"], k: "border-radius", v: cfg.borderRadiusValues },
  bdtrrs: {
    n: names["bdtrrs"],
    k: "border-top-right-radius",
    v: cfg.borderTopRightRadiusValues
  },
  bdtlrs: {
    n: names["bdtlrs"],
    k: "border-top-left-radius",
    v: cfg.borderTopLeftRadiusValues
  },
  bdbrrs: {
    n: names["bdbrrs"],
    k: "border-bottom-right-radius",
    v: cfg.borderBottomRightRadiusValues
  },
  bdblrs: {
    n: names["bdblrs"],
    k: "border-bottom-left-radius",
    v: cfg.borderBottomLeftRadiusValues
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
