import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type WidthSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type WidthModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  widthValues?: GenericObject | string[];
  maxWidthValues?: GenericObject | string[];
  minWidthValues?: GenericObject | string[];
}

const defaultNames = {
  w: "w",
  "w:a": "wa",
  maw: "maw",
  "maw:n": "mawn",
  miw: "miw",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  w: { name: names["w"], key: "width", value: cfg.widthValues },
  "w:a": { name: names["w:a"], key: "width", value: "auto" },
  maw: { name: names["maw"], key: "max-width", value: cfg.maxWidthValues },
  "maw:n": { name: names["maw:n"], key: "max-width", value: "none" },
  miw: { name: names["miw"], key: "min-width", value: cfg.minWidthValues },
});

const meta: Meta = {
  module: "width",
};

const cssModule: WidthModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
