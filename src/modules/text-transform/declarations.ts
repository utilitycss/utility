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
  "tt:n": "ttn",
  "tt:c": "ttc",
  "tt:u": "ttu",
  "tt:l": "ttl",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
