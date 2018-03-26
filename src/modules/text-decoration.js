const applyRules = require("../util/applyRules");

const defaultNames = {
  "td:n": "tdn",
  "td:u": "tdu",
  "td:o": "tdo",
  "td:l": "tdl"
};

const getRules = names => ({
  "td:n": { name: names["td:n"], key: "text-decoration", value: "none" },
  "td:u": { name: names["td:u"], key: "text-decoration", value: "underline" },
  "td:o": { name: names["td:o"], key: "text-decoration", value: "overline" },
  "td:l": { name: names["td:l"], key: "text-decoration", value: "line-through" }
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
