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
  "cur:a": "cura",
  "cur:d": "curd",
  "cur:c": "curc",
  "cur:ha": "curha",
  "cur:he": "curhe",
  "cur:m": "curm",
  "cur:p": "curp",
  "cur:t": "curt",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
