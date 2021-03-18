import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type OverflowSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type OverflowModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
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
  "ovs:mq": "ovsmq",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "ov:v": { name: names["ov:v"], key: "overflow", value: "visible" },
  "ov:h": { name: names["ov:h"], key: "overflow", value: "hidden" },
  "ov:s": { name: names["ov:s"], key: "overflow", value: "scroll" },
  "ov:a": { name: names["ov:a"], key: "overflow", value: "auto" },
  "ovx:v": { name: names["ovx:v"], key: "overflow-x", value: "visible" },
  "ovx:h": { name: names["ovx:h"], key: "overflow-x", value: "hidden" },
  "ovx:s": { name: names["ovx:s"], key: "overflow-x", value: "scroll" },
  "ovx:a": { name: names["ovx:a"], key: "overflow-x", value: "auto" },
  "ovy:v": { name: names["ovy:v"], key: "overflow-y", value: "visible" },
  "ovy:h": { name: names["ovy:h"], key: "overflow-y", value: "hidden" },
  "ovy:s": { name: names["ovy:s"], key: "overflow-y", value: "scroll" },
  "ovy:a": { name: names["ovy:a"], key: "overflow-y", value: "auto" },
  "ovs:a": { name: names["ovs:a"], key: "overflow-style", value: "auto" },
  "ovs:s": { name: names["ovs:s"], key: "overflow-style", value: "scrollbar" },
  "ovs:p": { name: names["ovs:p"], key: "overflow-style", value: "panner" },
  "ovs:m": { name: names["ovs:m"], key: "overflow-style", value: "move" },
  "ovs:mq": { name: names["ovs:mq"], key: "overflow-style", value: "marquee" },
});

const meta: Meta = {
  module: "overflow",
};

const cssModule: OverflowModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
