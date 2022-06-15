import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type ListStyleSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type ListStyleModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  listStyleValues?: GenericObject | string[];
}

const defaultNames = {
  "lisp:i": "lisp:i",
  "lisp:o": "lisp:o",
  "list:n": "list:n",
  "list:d": "list:d",
  "list:dc": "list:dc",
  "li:sy": "lisy",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "lisp:i": {
    name: names["lisp:i"],
    key: "list-style-position",
    value: "inside",
  },
  "lisp:o": {
    name: names["lisp:o"],
    key: "list-style-position",
    value: "outside",
  },
  "list:n": { name: names["list:n"], key: "list-style-type", value: "none" },
  "list:d": { name: names["list:d"], key: "list-style-type", value: "disc" },
  "list:dc": {
    name: names["list:dc"],
    key: "list-style-type",
    value: "decimal",
  },
  "li:sy": {
    name: names["li:sy"],
    key: "list-style",
    value: cfg.listStyleValues,
  },
});

const meta: Meta = {
  module: "list-style",
};

const cssModule: ListStyleModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
