import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type ClearSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ClearModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "o:c": "cll",
  "o:con": "ocon",
  "o:f": "of",
  "o:n": "on",
  "o:sd": "osd",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "o:c": { name: names["o:c"], key: "object-fit", value: "cover" },
  "o:con": { name: names["o:con"], key: "object-fit", value: "contain" },
  "o:f": { name: names["o:f"], key: "object-fit", value: "fill" },
  "o:n": { name: names["o:n"], key: "object-fit", value: "none" },
  "o:sd": { name: names["o:sd"], key: "object-fit", value: "scale-down" },
});

const meta: Meta = {
  module: "clear",
};

const cssModule: ClearModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
