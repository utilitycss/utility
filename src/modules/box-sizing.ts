import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type BoxSizingSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type BoxSizingModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
  "bxz:cb": "bxzcb",
  "bxz:bb": "bxzbb",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "bxz:cb": { name: names["bxz:cb"], key: "box-sizing", value: "content-box" },
  "bxz:bb": { name: names["bxz:bb"], key: "box-sizing", value: "border-box" },
});

const meta: Meta = {
  module: "box-sizing",
};

const cssModule: BoxSizingModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
