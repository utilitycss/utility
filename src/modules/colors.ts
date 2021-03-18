import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type ColorsSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ColorsModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  colorValues?: GenericObject | string[];
  backgroundColorValues?: GenericObject | string[];
  borderColorValues?: GenericObject | string[];
}

export const defaultNames = {
  c: "c",
  bgc: "bgc",
  bdc: "bdc",
  bdtc: "bdtc",
  bdrc: "bdrc",
  bdbc: "bdbc",
  bdlc: "bdlc",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  c: { name: names["c"], key: "color", value: cfg.colorValues },
  bgc: {
    name: names["bgc"],
    key: "background-color",
    value: cfg.backgroundColorValues,
  },
  bdc: {
    name: names["bdc"],
    key: "border-color",
    value: cfg.borderColorValues,
  },
  bdtc: {
    name: names["bdtc"],
    key: "border-top-color",
    value: cfg.borderColorValues,
  },
  bdrc: {
    name: names["bdrc"],
    key: "border-right-color",
    value: cfg.borderColorValues,
  },
  bdbc: {
    name: names["bdbc"],
    key: "border-bottom-color",
    value: cfg.borderColorValues,
  },
  bdlc: {
    name: names["bdlc"],
    key: "border-left-color",
    value: cfg.borderColorValues,
  },
});

const meta: Meta = {
  module: "colors",
};

const cssModule: ColorsModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
