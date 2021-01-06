import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type TextAlignSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type TextAlignModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "ta:l": "tal",
  "ta:c": "tac",
  "ta:r": "tar",
  "ta:j": "taj",
  "tal:a": "tala",
  "tal:l": "tall",
  "tal:c": "talc",
  "tal:r": "talr",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "ta:l": { name: names["ta:l"], key: "text-align", value: "left" },
  "ta:c": { name: names["ta:c"], key: "text-align", value: "center" },
  "ta:r": { name: names["ta:r"], key: "text-align", value: "right" },
  "ta:j": { name: names["ta:j"], key: "text-align", value: "justify" },
  "tal:a": { name: names["tal:a"], key: "text-align-last", value: "auto" },
  "tal:l": { name: names["tal:l"], key: "text-align-last", value: "left" },
  "tal:c": { name: names["tal:c"], key: "text-align-last", value: "center" },
  "tal:r": { name: names["tal:r"], key: "text-align-last", value: "right" },
});

const meta: Meta = {
  module: "text-align",
};

const cssModule: TextAlignModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
