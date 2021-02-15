import applyRules from "../util/applyRules";

import { GetRules, GenericObject, Meta, Module } from "../types";

export type FontSupportedTypes = {
  [key in keyof typeof defaultNames]?: string;
};

export type FontModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  fontWeightValues?: GenericObject | string[];
  fontSizeValues?: GenericObject | string[];
  fontSizeAdjustValues?: GenericObject | string[];
  fontFamilyValues?: GenericObject | string[];
}

const defaultNames = {
  fw: "fw",
  "fw:n": "fwn",
  "fw:b": "fwb",
  "fw:br": "fwbr",
  "fw:lr": "fwlr",
  "fs:n": "fsn",
  "fs:i": "fsi",
  "fs:o": "fso",
  "fv:n": "fvn",
  "fv:sc": "fvsc",
  fz: "fz",
  fza: "fza",
  "fza:n": "fzan",
  ff: "ff",
  "ff:s": "ffs",
  "ff:ss": "ffss",
  "ff:c": "ffc",
  "ff:f": "fff",
  "ff:m": "ffm",
  "ff:a": "ffa",
  "ff:t": "fft",
  "ff:v": "ffv",
  "fef:n": "fefn",
  "fef:eg": "fefeg",
  "fef:eb": "fefeb",
  "fef:o": "fefo",
  "fst:n": "fstn",
  "fst:uc": "fstuc",
  "fst:ec": "fstec",
  "fst:c": "fstc",
  "fst:sc": "fstsc",
  "fst:se": "fstse",
  "fst:e": "fste",
  "fst:ee": "fstee",
  "fst:ue": "fstue",
};

const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  fw: { name: names["fw"], key: "font-weight", value: cfg.fontWeightValues },
  "fw:n": { name: names["fw:n"], key: "font-weight", value: "normal" },
  "fw:b": { name: names["fw:b"], key: "font-weight", value: "bold" },
  "fw:br": { name: names["fw:br"], key: "font-weight", value: "bolder" },
  "fw:lr": { name: names["fw:lr"], key: "font-weight", value: "lighter" },
  "fs:n": { name: names["fs:n"], key: "font-style", value: "normal" },
  "fs:i": { name: names["fs:i"], key: "font-style", value: "italic" },
  "fs:o": { name: names["fs:o"], key: "font-style", value: "oblique" },
  "fv:n": { name: names["fv:n"], key: "font-variant", value: "normal" },
  "fv:sc": { name: names["fv:sc"], key: "font-variant", value: "small-caps" },
  fz: { name: names["fz"], key: "font-size", value: cfg.fontSizeValues },
  fza: {
    name: names["fza"],
    key: "font-size-adjust",
    value: cfg.fontSizeAdjustValues,
  },
  "fza:n": { name: names["fza:n"], key: "font-size-adjust", value: "none" },
  ff: { name: names["ff"], key: "font-family", value: cfg.fontFamilyValues },
  "ff:s": { name: names["ff:s"], key: "font-family", value: "serif" },
  "ff:ss": { name: names["ff:ss"], key: "font-family", value: "sans-serif" },
  "ff:c": { name: names["ff:c"], key: "font-family", value: "cursive" },
  "ff:f": { name: names["ff:f"], key: "font-family", value: "fantasy" },
  "ff:m": { name: names["ff:m"], key: "font-family", value: "monospace" },
  "ff:a": {
    name: names["ff:a"],
    key: "font-family",
    value: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  },
  "ff:t": {
    name: names["ff:t"],
    key: "font-family",
    value: '"Times New Roman", Times, Baskerville, Georgia, serif',
  },
  "ff:v": {
    name: names["ff:v"],
    key: "font-family",
    value: "Verdana, Geneva, sans-serif",
  },
  "fef:n": { name: names["fef:n"], key: "font-effect", value: "none" },
  "fef:eg": { name: names["fef:eg"], key: "font-effect", value: "engrave" },
  "fef:eb": { name: names["fef:eb"], key: "font-effect", value: "emboss" },
  "fef:o": { name: names["fef:o"], key: "font-effect", value: "outline" },
  "fst:n": { name: names["fst:n"], key: "font-stretch", value: "normal" },
  "fst:uc": {
    name: names["fst:uc"],
    key: "font-stretch",
    value: "ultra-condensed",
  },
  "fst:ec": {
    name: names["fst:ec"],
    key: "font-stretch",
    value: "extra-condensed",
  },
  "fst:c": { name: names["fst:c"], key: "font-stretch", value: "condensed" },
  "fst:sc": {
    name: names["fst:sc"],
    key: "font-stretch",
    value: "semi-condensed",
  },
  "fst:se": {
    name: names["fst:se"],
    key: "font-stretch",
    value: "semi-expanded",
  },
  "fst:e": { name: names["fst:e"], key: "font-stretch", value: "expanded" },
  "fst:ee": {
    name: names["fst:ee"],
    key: "font-stretch",
    value: "extra-expanded",
  },
  "fst:ue": {
    name: names["fst:ue"],
    key: "font-stretch",
    value: "ultra-expanded",
  },
});

const meta: Meta = {
  module: "font",
};

const cssModule: FontModuleType = (config) => (globalConfig) => {
  return applyRules({
    config,
    globalConfig,
    defaultNames,
    getRules,
    meta: Object.assign({}, meta, config && config.meta),
  });
};

export default cssModule;
