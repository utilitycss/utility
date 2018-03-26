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
    values: cfg.backgroundImageValues
  },
  "bgi:n": { name: names["bgi:n"], key: "background-image", values: "none" },
  "bgr:n": {
    name: names["bgr:n"],
    key: "background-repeat",
    values: "no-repeat"
  },
  "bgr:x": {
    name: names["bgr:x"],
    key: "background-repeat",
    values: "repeat-x"
  },
  "bgr:y": {
    name: names["bgr:y"],
    key: "background-repeat",
    values: "repeat-y"
  },
  "bgr:rd": {
    name: names["bgr:rd"],
    key: "background-repeat",
    values: "round"
  },
  "bga:f": {
    name: names["bga:f"],
    key: "background-attachment",
    values: "fixed"
  },
  "bga:s": {
    name: names["bga:s"],
    key: "background-attachment",
    values: "scroll"
  },
  bgp: {
    name: names["bgp"],
    key: "background-position",
    values: cfg.backgroundPostionValues
  },
  bgpx: {
    name: names["bgpx"],
    key: "background-position-x",
    values: cfg.backgroundPostionXValues
  },
  bgpy: {
    name: names["bgpy"],
    key: "background-position-y",
    values: cfg.backgroundPostionYValues
  },
  "bgcp:bb": {
    name: names["bgcp:bb"],
    key: "background-clip",
    values: "border-box"
  },
  "bgcp:pb": {
    name: names["bgcp:pb"],
    key: "background-clip",
    values: "padding-box"
  },
  "bgcp:cb": {
    name: names["bgcp:cb"],
    key: "background-clip",
    values: "content-box"
  },
  "bgo:bb": {
    name: names["bgo:bb"],
    key: "background-origin",
    values: "border-box"
  },
  "bgo:pb": {
    name: names["bgo:pb"],
    key: "background-origin",
    values: "padding-box"
  },
  "bgo:cb": {
    name: names["bgo:cb"],
    key: "background-origin",
    values: "content-box"
  },
  "bgsz:a": { name: names["bgsz:a"], key: "background-size", values: "auto" },
  "bgsz:ct": {
    name: names["bgsz:ct"],
    key: "background-size",
    values: "contain"
  },
  "bgsz:cv": { name: names["bgsz:cv"], key: "background-size", values: "cover" }
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
