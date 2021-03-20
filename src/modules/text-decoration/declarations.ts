import { Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfigVariables {}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  "td:n": "tdn",
  "td:u": "tdu",
  "td:o": "tdo",
  "td:l": "tdl",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
