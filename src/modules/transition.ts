import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type TransitionSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type TransitionModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  transitionValues?: GenericObject | string[];
  transitionDelayValues?: GenericObject | string[];
  transitionDurationValues?: GenericObject | string[];
  transitionPropertyValues?: GenericObject | string[];
  transitionTimingFunctionValues?: GenericObject | string[];
}

const defaultNames = {
  trs: "trs",
  trsde: "trsde",
  trsdu: "trsdu",
  trsp: "trsp",
  "trsp:n": "trspn",
  "trsp:a": "trspa",
  trstf: "trstf",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  trs: { name: names["trs"], key: "transition", value: cfg.transitionValues },
  trsde: {
    name: names["trsde"],
    key: "transition-delay",
    value: cfg.transitionDelayValues,
  },
  trsdu: {
    name: names["trsdu"],
    key: "transition-duration",
    value: cfg.transitionDurationValues,
  },
  trsp: {
    name: names["trsp"],
    key: "transition-property",
    value: cfg.transitionPropertyValues,
  },
  "trsp:n": {
    name: names["trsp:n"],
    key: "transition-property",
    value: "none",
  },
  "trsp:a": {
    name: names["trsp:a"],
    key: "transition-property",
    value: "all",
  },
  trstf: {
    name: names["trstf"],
    key: "transition-timing-function",
    value: cfg.transitionTimingFunctionValues,
  },
});

const meta: Meta = {
  module: "transition",
};

const cssModule: TransitionModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
