const applyRules = require("../util/applyRules");

const defaultNames = {
  c: "c",
  bgc: "bgc",
  bdc: "bdc",
  bdtc: "bdtc",
  bdrc: "bdrc",
  bdbc: "bdbc",
  bdlc: "bdlc"
};

const getRules = (names, cfg) => ({
  c: { name: names["c"], key: "color", value: cfg.colorValues },
  bgc: {
    name: names["bgc"],
    key: "background-color",
    value: cfg.backgroundColorValues
  },
  bdc: {
    name: names["bdc"],
    key: "border-color",
    value: cfg.borderColorValues
  },
  bdtc: {
    name: names["bdtc"],
    key: "border-top-color",
    value: cfg.borderColorValues
  },
  bdrc: {
    name: names["bdrc"],
    key: "border-right-color",
    value: cfg.borderColorValues
  },
  bdbc: {
    name: names["bdbc"],
    key: "border-bottom-color",
    value: cfg.borderColorValues
  },
  bdlc: {
    name: names["bdlc"],
    key: "border-left-color",
    value: cfg.borderColorValues
  }
});

const meta = {
  module: "colors"
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
