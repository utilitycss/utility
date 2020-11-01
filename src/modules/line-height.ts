import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type LineHeightSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type LineHeightModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values: GenericObject | string[];
}

const defaultNames = {
  lh: "lh",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  lh: { name: names["lh"], key: "line-height", value: cfg.values },
});

const meta: Meta = {
  module: "line-height",
};

const module: LineHeightModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
