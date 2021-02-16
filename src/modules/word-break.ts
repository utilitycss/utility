import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type ClearSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ClearModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "ob:n": "ob:n",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "ob:n": { name: names["ob:n"], key: "word-break", value: "normal" },
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
