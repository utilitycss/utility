import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  outlineValues?: GenericObject | string[];
  outlineOffsetValues?: GenericObject | string[];
  outlineWidthValues?: GenericObject | string[];
  outlineColorValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  ol: "ol",
  "ol:n": "oln",
  olo: "olo",
  olw: "olw",
  "olw:tn": "olwtn",
  "olw:m": "olwm",
  "olw:tk": "olwtk",
  olc: "olc",
  "olc:i": "olci",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "ol",
    variable: "outlineValues",
  },
  {
    name: "olo",
    variable: "outlineOffsetValues",
  },
  {
    name: "olw",
    variable: "outlineWidthValues",
  },
  {
    name: "olc",
    variable: "outlineColorValues",
  },
];
