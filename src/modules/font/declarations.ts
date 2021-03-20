import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  fontWeightValues?: GenericObject | string[];
  fontSizeValues?: GenericObject | string[];
  fontSizeAdjustValues?: GenericObject | string[];
  fontFamilyValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
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

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "fw",
    variable: "fontWeightValues",
  },
  {
    name: "fz",
    variable: "fontSizeValues",
  },
  {
    name: "fza",
    variable: "fontSizeAdjustValues",
  },
  {
    name: "ff",
    variable: "fontFamilyValues",
  },
];
