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
  c: { n: names["c"], k: "color", v: cfg.colorValues },
  bgc: { n: names["bgc"], k: "background-color", v: cfg.backgroundColorValues },
  bdc: { n: names["bdc"], k: "border-color", v: cfg.borderColorValues },
  bdtc: { n: names["bdtc"], k: "border-top-color", v: cfg.borderColorValues },
  bdrc: { n: names["bdrc"], k: "border-right-color", v: cfg.borderColorValues },
  bdbc: {
    n: names["bdbc"],
    k: "border-bottom-color",
    v: cfg.borderColorValues
  },
  bdlc: { n: names["bdlc"], k: "border-left-color", v: cfg.borderColorValues }
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
