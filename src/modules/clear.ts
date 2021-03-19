import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type ClearSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ClearModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
  "cl:n": "cln",
  "cl:l": "cll",
  "cl:r": "clr",
  "cl:b": "clb",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "cl:n": { name: names["cl:n"], key: "clear", value: "none" },
  "cl:l": { name: names["cl:l"], key: "clear", value: "left" },
  "cl:r": { name: names["cl:r"], key: "clear", value: "right" },
  "cl:b": { name: names["cl:b"], key: "clear", value: "both" },
});

const meta: Meta = {
  module: "clear",
};

const cssModule: ClearModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
