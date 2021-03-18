import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type VerticalAlignSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type VerticalAlignModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
  "va:sup": "vasup",
  "va:t": "vat",
  "va:tt": "vatt",
  "va:m": "vam",
  "va:bl": "vabl",
  "va:b": "vab",
  "va:tb": "vatb",
  "va:sub": "vasub",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "va:sup": { name: names["va:sup"], key: "vertical-align", value: "super" },
  "va:t": { name: names["va:t"], key: "vertical-align", value: "top" },
  "va:tt": { name: names["va:tt"], key: "vertical-align", value: "text-top" },
  "va:m": { name: names["va:m"], key: "vertical-align", value: "middle" },
  "va:bl": { name: names["va:bl"], key: "vertical-align", value: "baseline" },
  "va:b": { name: names["va:b"], key: "vertical-align", value: "bottom" },
  "va:tb": {
    name: names["va:tb"],
    key: "vertical-align",
    value: "text-bottom",
  },
  "va:sub": { name: names["va:sub"], key: "vertical-align", value: "sub" },
});

const meta: Meta = {
  module: "vertical-align",
};

const cssModule: VerticalAlignModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
