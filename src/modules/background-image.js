const applyRules = require("../util/applyRules");

const defaultNames = {
  bgi: "bgi",
  "bgi:n": "bgin",
  "bgr:n": "bgrn",
  "bgr:x": "bgrx",
  "bgr:y": "bgry",
  "bgr:sp": "bgrsp",
  "bgr:rd": "bgrrd",
  "bga:f": "bgaf",
  "bga:s": "bgas",
  bgp: "bgp",
  bgpx: "bgpx",
  bgpy: "bgpy",
  "bgcp:bb": "bgcpbb",
  "bgcp:pb": "bgcppb",
  "bgcp:cb": "bgcpcb",
  "bgo:bb": "bgobb",
  "bgo:pb": "bgopb",
  "bgo:cb": "bgocb",
  "bgsz:a": "bgsza",
  "bgsz:ct": "bgszct",
  "bgsz:cv": "bgszcv"
};

const getRules = (names, cfg) => ({
  bgi: {
    name: names["bgi"],
    key: "background-image",
    value: cfg.backgroundImageValues
  },
  "bgi:n": { name: names["bgi:n"], key: "background-image", value: "none" },
  "bgr:n": {
    name: names["bgr:n"],
    key: "background-repeat",
    value: "no-repeat"
  },
  "bgr:x": {
    name: names["bgr:x"],
    key: "background-repeat",
    value: "repeat-x"
  },
  "bgr:y": {
    name: names["bgr:y"],
    key: "background-repeat",
    value: "repeat-y"
  },
  "bgr:rd": {
    name: names["bgr:rd"],
    key: "background-repeat",
    value: "round"
  },
  "bga:f": {
    name: names["bga:f"],
    key: "background-attachment",
    value: "fixed"
  },
  "bga:s": {
    name: names["bga:s"],
    key: "background-attachment",
    value: "scroll"
  },
  bgp: {
    name: names["bgp"],
    key: "background-position",
    value: cfg.backgroundPostionValues
  },
  bgpx: {
    name: names["bgpx"],
    key: "background-position-x",
    value: cfg.backgroundPostionXValues
  },
  bgpy: {
    name: names["bgpy"],
    key: "background-position-y",
    value: cfg.backgroundPostionYValues
  },
  "bgcp:bb": {
    name: names["bgcp:bb"],
    key: "background-clip",
    value: "border-box"
  },
  "bgcp:pb": {
    name: names["bgcp:pb"],
    key: "background-clip",
    value: "padding-box"
  },
  "bgcp:cb": {
    name: names["bgcp:cb"],
    key: "background-clip",
    value: "content-box"
  },
  "bgo:bb": {
    name: names["bgo:bb"],
    key: "background-origin",
    value: "border-box"
  },
  "bgo:pb": {
    name: names["bgo:pb"],
    key: "background-origin",
    value: "padding-box"
  },
  "bgo:cb": {
    name: names["bgo:cb"],
    key: "background-origin",
    value: "content-box"
  },
  "bgsz:a": { name: names["bgsz:a"], key: "background-size", value: "auto" },
  "bgsz:ct": {
    name: names["bgsz:ct"],
    key: "background-size",
    value: "contain"
  },
  "bgsz:cv": { name: names["bgsz:cv"], key: "background-size", value: "cover" }
});

const meta = {
  module: "background-image"
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
