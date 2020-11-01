import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type AnimationSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type AnimationModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values?: GenericObject | string[];
}

const defaultNames = {
  anim: "anim",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  anim: { name: names["anim"], key: "animation", value: cfg.values },
});

const meta: Meta = {
  module: "animation",
};

const module: AnimationModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
