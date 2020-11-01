import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type PointerEventsSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type PointerEventsModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "pe:n": "pe:n",
  "pe:a": "pe:a",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "pe:n": { name: names["pe:n"], key: "pointer-events", value: "none" },
  "pe:a": { name: names["pe:a"], key: "pointer-events", value: "auto" },
});

const meta: Meta = {
  module: "pointer-events",
};

const module: PointerEventsModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
