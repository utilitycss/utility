import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  transitionValues?: GenericObject | string[];
  transitionDelayValues?: GenericObject | string[];
  transitionDurationValues?: GenericObject | string[];
  transitionPropertyValues?: GenericObject | string[];
  transitionTimingFunctionValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  trs: "trs",
  trsde: "trsde",
  trsdu: "trsdu",
  trsp: "trsp",
  "trsp:n": "trspn",
  "trsp:a": "trspa",
  trstf: "trstf",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "trs",
    variable: "transitionValues",
  },
  {
    name: "trsde",
    variable: "transitionDelayValues",
  },
  {
    name: "trsdu",
    variable: "transitionDurationValues",
  },
  {
    name: "trsp",
    variable: "transitionPropertyValues",
  },
  {
    name: "trstf",
    variable: "transitionTimingFunctionValues",
  },
];
