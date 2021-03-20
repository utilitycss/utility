import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  topValues?: GenericObject | string;
  rightValues?: GenericObject | string;
  bottomValues?: GenericObject | string;
  leftValues?: GenericObject | string;
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  "pos:s": "poss",
  "pos:a": "posa",
  "pos:r": "posr",
  "pos:f": "posf",
  "pos:stky": "posstky",
  t: "t",
  "t:a": "ta",
  r: "r",
  "r:a": "ra",
  b: "b",
  "b:a": "ba",
  l: "l",
  "l:a": "la",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "t",
    variable: "topValues",
  },
  {
    name: "r",
    variable: "rightValues",
  },
  {
    name: "b",
    variable: "bottomValues",
  },
  {
    name: "l",
    variable: "leftValues",
  },
];
