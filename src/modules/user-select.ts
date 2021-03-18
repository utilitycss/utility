import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type UserSelectSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type UserSelectModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
  "us:n": "us:n",
  "us:au": "us:au",
  "us:t": "us:t",
  "us:c": "us:c",
  "us:a": "us:a",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "us:n": { name: names["us:n"], key: "user-select", value: "none" },
  "us:au": { name: names["us:au"], key: "user-select", value: "auto" },
  "us:t": { name: names["us:t"], key: "user-select", value: "text" },
  "us:c": { name: names["us:c"], key: "user-select", value: "contain" },
  "us:a": { name: names["us:a"], key: "user-select", value: "all" },
});

const meta: Meta = {
  module: "user-select",
};

const cssModule: UserSelectModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
