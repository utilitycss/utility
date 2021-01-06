import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type TransformSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type TransformModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  transformValues?: GenericObject | string;
  transformOriginValues?: GenericObject | string;
}

const defaultNames = {
  trf: "trf",
  "trf:n": "trfn",
  trfo: "trfo",
  "trfs:f": "trfsf",
  "trfs:p": "trfsp",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  trf: { name: names["trf"], key: "transform", value: cfg.transformValues },
  "trf:n": { name: names["trf:n"], key: "transform", value: "none" },
  trfo: {
    name: names["trfo"],
    key: "transform-origin",
    value: cfg.transformOriginValues,
  },
  "trfs:f": { name: names["trfs:f"], key: "transform-style", value: "flat" },
  "trfs:p": {
    name: names["trfs:p"],
    key: "transform-style",
    value: "preserve-3d",
  },
});

const meta: Meta = {
  module: "transform",
};

const cssModule: TransformModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
