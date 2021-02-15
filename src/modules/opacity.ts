import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type OpacitySupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type OpacityModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values?: GenericObject | string[];
}

const defaultNames = {
  op: "op",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  op: { name: names["op"], key: "opacity", value: cfg.values },
});

const meta: Meta = {
  module: "opacity",
};

const cssModule: OpacityModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
