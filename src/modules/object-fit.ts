import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type ObjectFitSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ObjectFitModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "ob:contain": "ob:contain",
  "ob:cover": "ob:cover",
  "ob:fill": "ob:fill",
  "ob:none": "ob:none",
  "ob:scaleDown": "ob:scaleDown",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "ob:contain": {
    name: names["ob:contain"],
    key: "object-fit",
    value: "contain",
  },
  "ob:cover": { name: names["ob:cover"], key: "object-fit", value: "cover" },
  "ob:fill": { name: names["ob:fill"], key: "object-fit", value: "fill" },
  "ob:none": { name: names["ob:none"], key: "object-fit", value: "none" },
  "ob:scaleDown": {
    name: names["ob:scaleDown"],
    key: "object-fit",
    value: "scale-down",
  },
});

const meta: Meta = {
  module: "object-fit",
};

const cssModule: ObjectFitModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
