const applyRules = require("../util/applyRules");

const defaultNames = {
  "ov:v": "ovv",
  "ov:h": "ovh",
  "ov:s": "ovs",
  "ov:a": "ova",
  "ovx:v": "ovxv",
  "ovx:h": "ovxh",
  "ovx:s": "ovxs",
  "ovx:a": "ovxa",
  "ovy:v": "ovyv",
  "ovy:h": "ovyh",
  "ovy:s": "ovys",
  "ovy:a": "ovya",
  "ovs:a": "ovsa",
  "ovs:s": "ovss",
  "ovs:p": "ovsp",
  "ovs:m": "ovsm",
  "ovs:mq": "ovsmq"
};

const getRules = (names, cfg) => ({
  "ov:v": { n: names["ov:v"], k: "overflow", v: "visible" },
  "ov:h": { n: names["ov:h"], k: "overflow", v: "hidden" },
  "ov:s": { n: names["ov:s"], k: "overflow", v: "scroll" },
  "ov:a": { n: names["ov:a"], k: "overflow", v: "auto" },
  "ovx:v": { n: names["ovx:v"], k: "overflow-x", v: "visible" },
  "ovx:h": { n: names["ovx:h"], k: "overflow-x", v: "hidden" },
  "ovx:s": { n: names["ovx:s"], k: "overflow-x", v: "scroll" },
  "ovx:a": { n: names["ovx:a"], k: "overflow-x", v: "auto" },
  "ovy:v": { n: names["ovy:v"], k: "overflow-y", v: "visible" },
  "ovy:h": { n: names["ovy:h"], k: "overflow-y", v: "hidden" },
  "ovy:s": { n: names["ovy:s"], k: "overflow-y", v: "scroll" },
  "ovy:a": { n: names["ovy:a"], k: "overflow-y", v: "auto" },
  "ovs:a": { n: names["ovs:a"], k: "overflow-style", v: "auto" },
  "ovs:s": { n: names["ovs:s"], k: "overflow-style", v: "scrollbar" },
  "ovs:p": { n: names["ovs:p"], k: "overflow-style", v: "panner" },
  "ovs:m": { n: names["ovs:m"], k: "overflow-style", v: "move" },
  "ovs:mq": { n: names["ovs:mq"], k: "overflow-style", v: "marquee" }
});

const meta = {
  module: "overflow"
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
