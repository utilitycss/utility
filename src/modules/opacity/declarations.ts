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
  op: "op",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "op",
    variable: "values",
  },
];
