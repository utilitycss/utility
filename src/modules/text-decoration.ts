import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type TextDecorationSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type TextDecorationModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "td:n": "tdn",
  "td:u": "tdu",
  "td:o": "tdo",
  "td:l": "tdl",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "td:n": { name: names["td:n"], key: "text-decoration", value: "none" },
  "td:u": { name: names["td:u"], key: "text-decoration", value: "underline" },
  "td:o": { name: names["td:o"], key: "text-decoration", value: "overline" },
  "td:l": {
    name: names["td:l"],
    key: "text-decoration",
    value: "line-through",
  },
});

const meta: Meta = {
  module: "text-decoration",
};

const module: TextDecorationModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
