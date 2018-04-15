const applyRules = require("../util/applyRules");

const defaultNames = {
  "whs:n": "whsn",
  "whs:p": "whsp",
  "whs:nw": "whsnw",
  "whs:pw": "whspw",
  "whs:pl": "whspl"
};

const getRules = names => ({
  "whs:n": { name: names["whs:n"], key: "white-space", value: "normal" },
  "whs:p": { name: names["whs:p"], key: "white-space", value: "pre" },
  "whs:nw": { name: names["whs:nw"], key: "white-space", value: "nowrap" },
  "whs:pw": { name: names["whs:pw"], key: "white-space", value: "pre-wrap" },
  "whs:pl": { name: names["whs:pl"], key: "white-space", value: "pre-line" }
});

const meta = {
  module: "white-space"
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
