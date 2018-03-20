const applyRules = require("../util/applyRules");

const defaultNames = {
  "td:n": "tdn",
  "td:u": "tdu",
  "td:o": "tdo",
  "td:l": "tdl"
};

const getRules = (names, cfg) => ({
  "td:n": { n: names["td:n"], k: "text-decoration", v: "none" },
  "td:u": { n: names["td:u"], k: "text-decoration", v: "underline" },
  "td:o": { n: names["td:o"], k: "text-decoration", v: "overline" },
  "td:l": { n: names["td:l"], k: "text-decoration", v: "line-through" }
});

const meta = {
  module: "text-decoration"
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
