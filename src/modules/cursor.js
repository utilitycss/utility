const applyRules = require("../util/applyRules");

const defaultNames = {
  "cur:a": "cura",
  "cur:d": "curd",
  "cur:c": "curc",
  "cur:ha": "curha",
  "cur:he": "curhe",
  "cur:m": "curm",
  "cur:p": "curp",
  "cur:t": "curt"
};

const getRules = names => ({
  "cur:a": { name: names["cur:a"], key: "cursor", value: "auto" },
  "cur:d": { name: names["cur:d"], key: "cursor", value: "default" },
  "cur:c": { name: names["cur:c"], key: "cursor", value: "crosshair" },
  "cur:ha": { name: names["cur:ha"], key: "cursor", value: "hand" },
  "cur:he": { name: names["cur:he"], key: "cursor", value: "help" },
  "cur:m": { name: names["cur:m"], key: "cursor", value: "move" },
  "cur:p": { name: names["cur:p"], key: "cursor", value: "pointer" },
  "cur:t": { name: names["cur:t"], key: "cursor", value: "text" }
});

const meta = {
  module: "cursor"
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
