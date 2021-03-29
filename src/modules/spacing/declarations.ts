import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  marginValues?: GenericObject | string[];
  paddingValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  m: "m",
  "m:a": "ma",
  mt: "mt",
  "mt:a": "mta",
  mr: "mr",
  "mr:a": "mra",
  mb: "mb",
  "mb:a": "mba",
  ml: "ml",
  "ml:a": "mla",
  p: "p",
  pt: "pt",
  pr: "pr",
  pb: "pb",
  pl: "pl",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "m",
    variable: "marginValues",
  },
  {
    name: "p",
    variable: "paddingValues",
  },
];
