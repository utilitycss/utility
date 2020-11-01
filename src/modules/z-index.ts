import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type ZIndexSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ZIndexModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values?: GenericObject | string;
}

const defaultNames = {
  z: "z",
  "z:a": "za",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  z: { name: names["z"], key: "z-index", value: cfg.values },
  "z:a": { name: names["z:a"], key: "z-index", value: "auto" },
});

const meta: Meta = {
  module: "z-index",
};

const module: ZIndexModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
