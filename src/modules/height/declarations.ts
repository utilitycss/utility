import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  heightValues?: GenericObject | string[];
  maxHeightValues?: GenericObject | string[];
  minHeightValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  h: "h",
  "h:a": "wa",
  mah: "mah",
  "mah:n": "mahn",
  mih: "mih",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "h",
    variable: "heightValues",
  },
  {
    name: "mah",
    variable: "maxHeightValues",
  },
  {
    name: "mih",
    variable: "minHeightValues",
  },
];
