import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type ResizeSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ResizeModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "rsz:n": "rszn",
  "rsz:b": "rszb",
  "rsz:h": "rszh",
  "rsz:v": "rszv",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "rsz:n": { name: names["rsz:n"], key: "resize", value: "none" },
  "rsz:b": { name: names["rsz:b"], key: "resize", value: "both" },
  "rsz:h": { name: names["rsz:h"], key: "resize", value: "horizontal" },
  "rsz:v": { name: names["rsz:v"], key: "resize", value: "vertical" },
});

const meta: Meta = {
  module: "resize",
};

const module: ResizeModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default module;
