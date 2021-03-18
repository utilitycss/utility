import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type FlexBoxSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type FlexBoxModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  flexBasisValues?: GenericObject | string[];
  orderValues?: GenericObject | string[];
}

export const defaultNames = {
  "fx:r": "fx:r",
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
  ord: "ord",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "fx:r": { name: names["fx:r"], key: "flex", value: "0 0 auto" },
  "fx:a": { name: names["fx:a"], key: "flex", value: "1 1 auto" },
  "fx:n": { name: names["fx:n"], key: "flex", value: "none" },
  fxb: { name: names["fxb"], key: "flex-basis", value: cfg.flexBasisValues },
  "fxd:c": { name: names["fxd:c"], key: "flex-direction", value: "column" },
  "fxd:cr": {
    name: names["fxd:cr"],
    key: "flex-direction",
    value: "column-reverse",
  },
  "fxd:r": { name: names["fxd:r"], key: "flex-direction", value: "row" },
  "fxd:rr": {
    name: names["fxd:rr"],
    key: "flex-direction",
    value: "row-reverse",
  },
  "fxg:0": { name: names["fxg:0"], key: "flex-grow", value: "0" },
  "fxg:1": { name: names["fxg:1"], key: "flex-grow", value: "1" },
  "fxs:0": { name: names["fxs:0"], key: "flex-shrink", value: "0" },
  "fxs:1": { name: names["fxs:1"], key: "flex-shrink", value: "1" },
  "fxw:n": { name: names["fxw:n"], key: "flex-wrap", value: "nowrap" },
  "fxw:w": { name: names["fxw:w"], key: "flex-wrap", value: "wrap" },
  "fxw:wr": { name: names["fxw:wr"], key: "flex-wrap", value: "wrap-reverse" },
  "ai:b": { name: names["ai:b"], key: "align-items", value: "baseline" },
  "ai:c": { name: names["ai:c"], key: "align-items", value: "center" },
  "ai:fe": { name: names["ai:fe"], key: "align-items", value: "flex-end" },
  "ai:fs": { name: names["ai:fs"], key: "align-items", value: "flex-start" },
  "ai:s": { name: names["ai:s"], key: "align-items", value: "stretch" },
  "as:a": { name: names["as:a"], key: "align-self", value: "auto" },
  "as:b": { name: names["as:b"], key: "align-self", value: "baseline" },
  "as:c": { name: names["as:c"], key: "align-self", value: "center" },
  "as:fe": { name: names["as:fe"], key: "align-self", value: "flex-end" },
  "as:fs": { name: names["as:fs"], key: "align-self", value: "flex-start" },
  "as:s": { name: names["as:s"], key: "align-self", value: "stretch" },
  "jc:c": { name: names["jc:c"], key: "justify-content", value: "center" },
  "jc:fe": { name: names["jc:fe"], key: "justify-content", value: "flex-end" },
  "jc:fs": {
    name: names["jc:fs"],
    key: "justify-content",
    value: "flex-start",
  },
  "jc:sa": {
    name: names["jc:sa"],
    key: "justify-content",
    value: "space-around",
  },
  "jc:sb": {
    name: names["jc:sb"],
    key: "justify-content",
    value: "space-between",
  },
  "jc:se": {
    name: names["jc:se"],
    key: "justify-content",
    value: "space-evenly",
  },
  "ac:c": { name: names["ac:c"], key: "align-content", value: "center" },
  "ac:s": { name: names["ac:s"], key: "align-content", value: "stretch" },
  "ac:fe": { name: names["ac:fe"], key: "align-content", value: "flex-end" },
  "ac:fs": { name: names["ac:fs"], key: "align-content", value: "flex-start" },
  "ac:sa": {
    name: names["ac:sa"],
    key: "align-content",
    value: "space-around",
  },
  "ac:sb": {
    name: names["ac:sb"],
    key: "align-content",
    value: "space-between",
  },
  "ac:se": {
    name: names["ac:se"],
    key: "align-content",
    value: "space-evenly",
  },
  ord: { name: names["ord"], key: "order", value: cfg.orderValues },
});

const meta: Meta = {
  module: "flexbox",
};

const cssModule: FlexBoxModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
