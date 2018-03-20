const applyRules = require("../util/applyRules");

const defaultNames = {
  "ta:l": "tal",
  "ta:c": "tac",
  "ta:r": "tar",
  "ta:j": "taj",
  "tal:a": "tala",
  "tal:l": "tall",
  "tal:c": "talc",
  "tal:r": "talr"
};

const getRules = (names, cfg) => ({
  "ta:l": { n: names["ta:l"], k: "text-align", v: "left" },
  "ta:c": { n: names["ta:c"], k: "text-align", v: "center" },
  "ta:r": { n: names["ta:r"], k: "text-align", v: "right" },
  "ta:j": { n: names["ta:j"], k: "text-align", v: "justify" },
  "tal:a": { n: names["tal:a"], k: "text-align-last", v: "auto" },
  "tal:l": { n: names["tal:l"], k: "text-align-last", v: "left" },
  "tal:c": { n: names["tal:c"], k: "text-align-last", v: "center" },
  "tal:r": { n: names["tal:r"], k: "text-align-last", v: "right" }
});

const meta = {
  module: "text-align"
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
