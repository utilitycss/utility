import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type FloatSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type FloatModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "fl:n": "fln",
  "fl:l": "fll",
  "fl:r": "flr",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "fl:n": { name: names["fl:n"], key: "float", value: "none" },
  "fl:l": { name: names["fl:l"], key: "float", value: "left" },
  "fl:r": { name: names["fl:r"], key: "float", value: "right" },
});

const meta: Meta = {
  module: "float",
};

const cssModule: FloatModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
