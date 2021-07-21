import applyRules from "../util/applyRules";

import { GetRules, Meta, Module } from "../types";

export type WordBreakSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type WordBreakModuleType = Module<ConfigVariables>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

const defaultNames = {
  "wob:i": "wob:i",
  "wob:in": "wob:in",
  "wob:r": "wob:r",
  "wob:u": "wob:u",
  "wob:n": "wob:n",
  "wob:k": "wob:k",
  "wob:ba": "wob:ba",
  "wob:bw": "wob:bw",
};

const getRules: GetRules<ConfigVariables> = (names) => ({
  "wob:i": { name: names["wob:i"], key: "word-break", value: "initial" },
  "wob:in": { name: names["wob:in"], key: "word-break", value: "inherit" },
  "wob:r": { name: names["wob:r"], key: "word-break", value: "revert" },
  "wob:u": { name: names["wob:u"], key: "word-break", value: "unset" },
  "wob:n": { name: names["wob:n"], key: "word-break", value: "normal" },
  "wob:k": { name: names["wob:k"], key: "word-break", value: "keep-all" },
  "wob:ba": { name: names["wob:ba"], key: "word-break", value: "break-all" },
  "wob:bw": { name: names["wob:bw"], key: "word-break", value: "break-word" },
});

const meta: Meta = {
  module: "word-break",
};

const cssModule: WordBreakModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
