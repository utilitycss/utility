import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  widthValues?: GenericObject | string[];
  maxWidthValues?: GenericObject | string[];
  minWidthValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  w: "w",
  "w:a": "wa",
  maw: "maw",
  "maw:n": "mawn",
  miw: "miw",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "w",
    variable: "widthValues",
  },
  {
    name: "maw",
    variable: "maxWidthValues",
  },
  {
    name: "miw",
    variable: "minWidthValues",
  },
];
