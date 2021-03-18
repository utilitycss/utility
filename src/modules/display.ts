import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type DisplaySupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type DisplayModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

export const defaultNames = {
  "d:n": "dn",
  "d:b": "db",
  "d:f": "df",
  "d:g": "dg",
  "d:if": "dif",
  "d:i": "di",
  "d:ib": "dib",
  "d:li": "dli",
  "d:ri": "dri",
  "d:cp": "dcp",
  "d:tb": "dtb",
  "d:itb": "ditb",
  "d:tbcp": "dtbcp",
  "d:tbcl": "dtbcl",
  "d:tbclg": "dtbclg",
  "d:tbhg": "dtbhg",
  "d:tbfg": "dtbfg",
  "d:tbr": "dtbr",
  "d:tbrg": "dtbrg",
  "d:tbc": "dtbc",
  "d:rb": "drb",
  "d:rbb": "drbb",
  "d:rbbg": "drbbg",
  "d:rbt": "drbt",
  "d:rbtg": "drbtg",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "d:n": { name: names["d:n"], key: "display", value: "none" },
  "d:b": { name: names["d:b"], key: "display", value: "block" },
  "d:f": { name: names["d:f"], key: "display", value: "flex" },
  "d:g": { name: names["d:g"], key: "display", value: "grid" },
  "d:if": { name: names["d:if"], key: "display", value: "inline-flex" },
  "d:i": { name: names["d:i"], key: "display", value: "inline" },
  "d:ib": { name: names["d:ib"], key: "display", value: "inline-block" },
  "d:li": { name: names["d:li"], key: "display", value: "list-item" },
  "d:ri": { name: names["d:ri"], key: "display", value: "run-in" },
  "d:cp": { name: names["d:cp"], key: "display", value: "compact" },
  "d:tb": { name: names["d:tb"], key: "display", value: "table" },
  "d:itb": { name: names["d:itb"], key: "display", value: "inline-table" },
  "d:tbcp": { name: names["d:tbcp"], key: "display", value: "table-caption" },
  "d:tbcl": { name: names["d:tbcl"], key: "display", value: "table-column" },
  "d:tbclg": {
    name: names["d:tbclg"],
    key: "display",
    value: "table-column-group",
  },
  "d:tbhg": {
    name: names["d:tbhg"],
    key: "display",
    value: "table-header-group",
  },
  "d:tbfg": {
    name: names["d:tbfg"],
    key: "display",
    value: "table-footer-group",
  },
  "d:tbr": { name: names["d:tbr"], key: "display", value: "table-row" },
  "d:tbrg": { name: names["d:tbrg"], key: "display", value: "table-row-group" },
  "d:tbc": { name: names["d:tbc"], key: "display", value: "table-cell" },
  "d:rb": { name: names["d:rb"], key: "display", value: "ruby" },
  "d:rbb": { name: names["d:rbb"], key: "display", value: "ruby-base" },
  "d:rbbg": { name: names["d:rbbg"], key: "display", value: "ruby-base-group" },
  "d:rbt": { name: names["d:rbt"], key: "display", value: "ruby-text" },
  "d:rbtg": { name: names["d:rbtg"], key: "display", value: "ruby-text-group" },
});

const meta: Meta = {
  module: "display",
};

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
