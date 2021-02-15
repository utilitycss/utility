import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type CursorSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type CursorModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "cur:a": "cura",
  "cur:d": "curd",
  "cur:c": "curc",
  "cur:ha": "curha",
  "cur:he": "curhe",
  "cur:m": "curm",
  "cur:p": "curp",
  "cur:t": "curt",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "cur:a": { name: names["cur:a"], key: "cursor", value: "auto" },
  "cur:d": { name: names["cur:d"], key: "cursor", value: "default" },
  "cur:c": { name: names["cur:c"], key: "cursor", value: "crosshair" },
  "cur:ha": { name: names["cur:ha"], key: "cursor", value: "hand" },
  "cur:he": { name: names["cur:he"], key: "cursor", value: "help" },
  "cur:m": { name: names["cur:m"], key: "cursor", value: "move" },
  "cur:p": { name: names["cur:p"], key: "cursor", value: "pointer" },
  "cur:t": { name: names["cur:t"], key: "cursor", value: "text" },
});

const meta: Meta = {
  module: "cursor",
};

const cssModule: CursorModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
