const applyRules = require("../util/applyRules");

const defaultNames = {
  "fx:a": "fxa",
  "fx:n": "fxn",
  fxb: "fxb",
  "fxd:c": "fxdc",
  "fxd:cr": "fxdcr",
  "fxd:r": "fxdr",
  "fxd:rr": "fxdrr",
  "fxg:0": "fxg0",
  "fxg:1": "fxg1",
  "fxs:0": "fxs0",
  "fxs:1": "fxs1",
  "fxw:n": "fxwn",
  "fxw:w": "fxww",
  "fxw:wr": "fxwwr",
  "ai:b": "aib",
  "ai:c": "aic",
  "ai:fe": "aife",
  "ai:fs": "aifs",
  "ai:s": "ais",
  "as:a": "asa",
  "as:b": "asb",
  "as:c": "asc",
  "as:fe": "asfe",
  "as:fs": "asfs",
  "as:s": "ass",
  "jc:c": "jcc",
  "jc:fe": "jcfe",
  "jc:fs": "jcfs",
  "jc:sa": "jcsa",
  "jc:sb": "jcsb",
  "jc:se": "jcse",
  "ac:c": "acc",
  "ac:s": "acs",
  "ac:fe": "acfe",
  "ac:fs": "acfs",
  "ac:sa": "acsa",
  "ac:sb": "acsb",
  "ac:se": "acse",
  ord: "ord"
};

const getRules = (names, cfg) => ({
  "fx:a": { n: names["fx:a"], k: "flex", v: "1 1 auto" },
  "fx:n": { n: names["fx:n"], k: "flex", v: "none" },
  fxb: { n: names["fxb"], k: "flex-basis", v: cfg.flexBasisValues },
  "fxd:c": { n: names["fxd:c"], k: "flex-direction", v: "column" },
  "fxd:cr": { n: names["fxd:cr"], k: "flex-direction", v: "column-reverse" },
  "fxd:r": { n: names["fxd:r"], k: "flex-direction", v: "row" },
  "fxd:rr": { n: names["fxd:rr"], k: "flex-direction", v: "row-reverse" },
  "fxg:0": { n: names["fxg:0"], k: "flex-grow", v: "0" },
  "fxg:1": { n: names["fxg:1"], k: "flex-grow", v: "1" },
  "fxs:0": { n: names["fxs:0"], k: "flex-shrink", v: "0" },
  "fxs:1": { n: names["fxs:1"], k: "flex-shrink", v: "1" },
  "fxw:n": { n: names["fxw:n"], k: "flex-wrap", v: "nowrap" },
  "fxw:w": { n: names["fxw:w"], k: "flex-wrap", v: "wrap" },
  "fxw:wr": { n: names["fxw:wr"], k: "flex-wrap", v: "wrap-reverse" },
  "ai:b": { n: names["ai:b"], k: "align-items", v: "baseline" },
  "ai:c": { n: names["ai:c"], k: "align-items", v: "center" },
  "ai:fe": { n: names["ai:fe"], k: "align-items", v: "flex-end" },
  "ai:fs": { n: names["ai:fs"], k: "align-items", v: "flex-start" },
  "ai:s": { n: names["ai:s"], k: "align-items", v: "stretch" },
  "as:a": { n: names["as:a"], k: "align-self", v: "auto" },
  "as:b": { n: names["as:b"], k: "align-self", v: "baseline" },
  "as:c": { n: names["as:c"], k: "align-self", v: "center" },
  "as:fe": { n: names["as:fe"], k: "align-self", v: "flex-end" },
  "as:fs": { n: names["as:fs"], k: "align-self", v: "flex-start" },
  "as:s": { n: names["as:s"], k: "align-self", v: "stretch" },
  "jc:c": { n: names["jc:c"], k: "justify-content", v: "center" },
  "jc:fe": { n: names["jc:fe"], k: "justify-content", v: "flex-end" },
  "jc:fs": { n: names["jc:fs"], k: "justify-content", v: "flex-start" },
  "jc:sa": { n: names["jc:sa"], k: "justify-content", v: "space-around" },
  "jc:sb": { n: names["jc:sb"], k: "justify-content", v: "space-between" },
  "jc:se": { n: names["jc:se"], k: "justify-content", v: "space-evenly" },
  "ac:c": { n: names["ac:c"], k: "align-content", v: "center" },
  "ac:s": { n: names["ac:s"], k: "align-content", v: "stretch" },
  "ac:fe": { n: names["ac:fe"], k: "align-content", v: "flex-end" },
  "ac:fs": { n: names["ac:fs"], k: "align-content", v: "flex-start" },
  "ac:sa": { n: names["ac:sa"], k: "align-content", v: "space-around" },
  "ac:sb": { n: names["ac:sb"], k: "align-content", v: "space-between" },
  "ac:se": { n: names["ac:se"], k: "align-content", v: "space-evenly" },
  ord: { n: names["ord"], k: "order", v: cfg.orderValues }
});

const meta = {
  module: "flexbox"
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
