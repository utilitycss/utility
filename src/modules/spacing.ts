import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type SpacingSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type SpacingModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  marginValues?: GenericObject | string[];
  paddingValues?: GenericObject | string[];
}

const defaultNames = {
  m: "m",
  "m:a": "ma",
  mt: "mt",
  "mt:a": "mta",
  mr: "mr",
  "mr:a": "mra",
  mb: "mb",
  "mb:a": "mba",
  ml: "ml",
  "ml:a": "mla",
  p: "p",
  pt: "pt",
  pr: "pr",
  pb: "pb",
  pl: "pl",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  m: { name: names["m"], key: "margin", value: cfg.marginValues },
  "m:a": { name: names["m:a"], key: "margin", value: "auto" },
  mt: { name: names["mt"], key: "margin-top", value: cfg.marginValues },
  "mt:a": { name: names["mt:a"], key: "margin-top", value: "auto" },
  mr: { name: names["mr"], key: "margin-right", value: cfg.marginValues },
  "mr:a": { name: names["mr:a"], key: "margin-right", value: "auto" },
  mb: { name: names["mb"], key: "margin-bottom", value: cfg.marginValues },
  "mb:a": { name: names["mb:a"], key: "margin-bottom", value: "auto" },
  ml: { name: names["ml"], key: "margin-left", value: cfg.marginValues },
  "ml:a": { name: names["ml:a"], key: "margin-left", value: "auto" },
  p: { name: names["p"], key: "padding", value: cfg.paddingValues },
  pt: { name: names["pt"], key: "padding-top", value: cfg.paddingValues },
  pr: { name: names["pr"], key: "padding-right", value: cfg.paddingValues },
  pb: { name: names["pb"], key: "padding-bottom", value: cfg.paddingValues },
  pl: { name: names["pl"], key: "padding-left", value: cfg.paddingValues },
});

const meta: Meta = {
  module: "spacing",
};

const cssModule: SpacingModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
