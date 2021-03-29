import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  colorValues?: GenericObject | string[];
  backgroundColorValues?: GenericObject | string[];
  borderColorValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  c: "c",
  bgc: "bgc",
  bdc: "bdc",
  bdtc: "bdtc",
  bdrc: "bdrc",
  bdbc: "bdbc",
  bdlc: "bdlc",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "c",
    variable: "colorValues",
  },
  {
    name: "bgc",
    variable: "backgroundColorValues",
  },
  {
    name: "bdc",
    variable: "borderColorValues",
  },
];
