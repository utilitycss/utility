import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type BoxShadowSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type BoxShadowModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  boxShadowValues?: GenericObject | string[];
}

const defaultNames = { "bxsh:n": "bxsh:n", bxsh: "bxsh" };

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "bxsh:n": {
    name: names["bxsh:n"],
    key: "box-shadow",
    value: "none",
  },
  bxsh: {
    name: names["bxsh"],
    key: "box-shadow",
    value: cfg.boxShadowValues,
  },
});

const meta: Meta = {
  module: "box-shadow",
};

const cssModule: BoxShadowModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
