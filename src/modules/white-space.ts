import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type WhiteSpaceSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type WhiteSpaceModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
  "whs:n": "whsn",
  "whs:p": "whsp",
  "whs:nw": "whsnw",
  "whs:pw": "whspw",
  "whs:pl": "whspl",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "whs:n": { name: names["whs:n"], key: "white-space", value: "normal" },
  "whs:p": { name: names["whs:p"], key: "white-space", value: "pre" },
  "whs:nw": { name: names["whs:nw"], key: "white-space", value: "nowrap" },
  "whs:pw": { name: names["whs:pw"], key: "white-space", value: "pre-wrap" },
  "whs:pl": { name: names["whs:pl"], key: "white-space", value: "pre-line" },
});

const meta: Meta = {
  module: "white-space",
};

const cssModule: WhiteSpaceModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
