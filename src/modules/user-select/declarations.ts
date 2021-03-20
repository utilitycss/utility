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
  "us:n": "us:n",
  "us:au": "us:au",
  "us:t": "us:t",
  "us:c": "us:c",
  "us:a": "us:a",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
