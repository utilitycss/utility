import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type LetterSpacingSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type LetterSpacingModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values: GenericObject | string[];
}

const defaultNames = {
  lts: "lts",
  "lts:n": "lts:n",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  lts: { name: names["lts"], key: "letter-spacing", value: cfg.values },
  "lts:n": { name: names["lts:n"], key: "letter-spacing", value: "normal" },
});

const meta: Meta = {
  module: "letter-spacing",
};

const cssModule: LetterSpacingModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
