import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  values?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  anim: "anim",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "anim",
    variable: "values",
  },
];
