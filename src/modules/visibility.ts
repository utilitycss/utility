import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type VisibilitySupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type VisibilityModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "v:v": "vv",
  "v:h": "vh",
  "v:c": "vc",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "v:v": { name: names["v:v"], key: "visibility", value: "visible" },
  "v:h": { name: names["v:h"], key: "visibility", value: "hidden" },
  "v:c": { name: names["v:c"], key: "visibility", value: "collapse" },
});

const meta: Meta = {
  module: "visibility",
};

const cssModule: VisibilityModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
