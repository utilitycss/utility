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
  "va:sup": "vasup",
  "va:t": "vat",
  "va:tt": "vatt",
  "va:m": "vam",
  "va:bl": "vabl",
  "va:b": "vab",
  "va:tb": "vatb",
  "va:sub": "vasub",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
