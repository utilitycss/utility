import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type TextOverflowSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type TextOverflowModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  textOverflowValues?: GenericObject | string[];
}

const defaultNames = {
  "tx:o": "txo",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  trf: {
    name: names["tx:o"],
    key: "text-overflow",
    value: cfg.textOverflowValues,
  },
});

const meta: Meta = {
  module: "text-overflow",
};

const cssModule: TextOverflowModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
