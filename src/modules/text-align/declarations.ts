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
  "ta:l": "tal",
  "ta:c": "tac",
  "ta:r": "tar",
  "ta:j": "taj",
  "tal:a": "tala",
  "tal:l": "tall",
  "tal:c": "talc",
  "tal:r": "talr",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
