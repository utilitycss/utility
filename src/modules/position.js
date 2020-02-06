const applyRules = require("../util/applyRules");

const defaultNames = {
  "pos:s": "poss",
  "pos:a": "posa",
  "pos:r": "posr",
  "pos:f": "posf",
  "pos:stky": "posstky",
  t: "t",
  "t:a": "ta",
  r: "r",
  "r:a": "ra",
  b: "b",
  "b:a": "ba",
  l: "l",
  "l:a": "la"
};

const getRules = (names, cfg) => ({
  "pos:s": { name: names["pos:s"], key: "position", value: "static" },
  "pos:a": { name: names["pos:a"], key: "position", value: "absolute" },
  "pos:r": { name: names["pos:r"], key: "position", value: "relative" },
  "pos:f": { name: names["pos:f"], key: "position", value: "fixed" },
  "pos:stky": { name: names["pos:stky"], key: "position", value: "sticky" },
  t: { name: names["t"], key: "top", value: cfg.topValues },
  "t:a": { name: names["t:a"], key: "top", value: "auto" },
  r: { name: names["r"], key: "right", value: cfg.rightValues },
  "r:a": { name: names["r:a"], key: "right", value: "auto" },
  b: { name: names["b"], key: "bottom", value: cfg.bottomValues },
  "b:a": { name: names["b:a"], key: "bottom", value: "auto" },
  l: { name: names["l"], key: "left", value: cfg.leftValues },
  "l:a": { name: names["l:a"], key: "left", value: "auto" }
});

const meta = {
  module: "position"
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
