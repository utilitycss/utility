import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type TextTransformSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type TextTransformModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "tt:n": "ttn",
  "tt:c": "ttc",
  "tt:u": "ttu",
  "tt:l": "ttl",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "tt:n": { name: names["tt:n"], key: "text-transform", value: "none" },
  "tt:c": { name: names["tt:c"], key: "text-transform", value: "capitalize" },
  "tt:u": { name: names["tt:u"], key: "text-transform", value: "uppercase" },
  "tt:l": { name: names["tt:l"], key: "text-transform", value: "lowercase" },
});

const meta: Meta = {
  module: "text-transform",
};

const module: TextTransformModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
