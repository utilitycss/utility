import applyRules from "../../util/applyRules";

import { Module } from "../../types";

import { defaultNames, ConfigVariables, configVariables } from "./declarations";
import { meta } from "./sampleConfig";
import getRules from "./variableRuleMap";

/**
 * Type: Supported declarations
 */
export type DisplaySupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

/**
 * Type: Postcss Module
 */
export type DisplayModuleType = Module<ConfigVariables>;

/**
 *
 * @param config Module config
 * @returns
 */
const cssModule: DisplayModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;

export { defaultNames, configVariables };
export { default as sampleConfigBuilder } from "./sampleConfig";
