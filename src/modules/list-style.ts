import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type ListStyleSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ListStyleModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  listStyleValues?: GenericObject | string[];
}

export const defaultNames = {
  "li:sy": "lisy",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "li:sy": {
    name: names["li:sy"],
    key: "list-style",
    value: cfg.listStyleValues,
  },
});

const meta: Meta = {
  module: "list-style",
};

const cssModule: ListStyleModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
