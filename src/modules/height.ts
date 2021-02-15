import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type HeightSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type HeightModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  heightValues?: GenericObject | string[];
  maxHeightValues?: GenericObject | string[];
  minHeightValues?: GenericObject | string[];
}

const defaultNames = {
  h: "h",
  "h:a": "wa",
  mah: "mah",
  "mah:n": "mahn",
  mih: "mih",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  h: { name: names["h"], key: "height", value: cfg.heightValues },
  "h:a": { name: names["h:a"], key: "height", value: "auto" },
  mah: { name: names["mah"], key: "max-height", value: cfg.maxHeightValues },
  "mah:n": { name: names["mah:n"], key: "max-height", value: "none" },
  mih: { name: names["mih"], key: "min-height", value: cfg.minHeightValues },
});

const meta: Meta = {
  module: "height",
};

const cssModule: HeightModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
