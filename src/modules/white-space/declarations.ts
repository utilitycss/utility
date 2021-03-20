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
  "whs:n": "whsn",
  "whs:p": "whsp",
  "whs:nw": "whsnw",
  "whs:pw": "whspw",
  "whs:pl": "whspl",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
