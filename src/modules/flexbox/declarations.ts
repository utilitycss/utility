import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  flexBasisValues?: GenericObject | string[];
  orderValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  "fx:r": "fx:r",
  "fx:a": "fxa",
  "fx:n": "fxn",
  fxb: "fxb",
  "fxd:c": "fxdc",
  "fxd:cr": "fxdcr",
  "fxd:r": "fxdr",
  "fxd:rr": "fxdrr",
  "fxg:0": "fxg0",
  "fxg:1": "fxg1",
  "fxs:0": "fxs0",
  "fxs:1": "fxs1",
  "fxw:n": "fxwn",
  "fxw:w": "fxww",
  "fxw:wr": "fxwwr",
  "ai:b": "aib",
  "ai:c": "aic",
  "ai:fe": "aife",
  "ai:fs": "aifs",
  "ai:s": "ais",
  "as:a": "asa",
  "as:b": "asb",
  "as:c": "asc",
  "as:fe": "asfe",
  "as:fs": "asfs",
  "as:s": "ass",
  "jc:c": "jcc",
  "jc:fe": "jcfe",
  "jc:fs": "jcfs",
  "jc:sa": "jcsa",
  "jc:sb": "jcsb",
  "jc:se": "jcse",
  "ac:c": "acc",
  "ac:s": "acs",
  "ac:fe": "acfe",
  "ac:fs": "acfs",
  "ac:sa": "acsa",
  "ac:sb": "acsb",
  "ac:se": "acse",
  ord: "ord",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "fxb",
    variable: "flexBasisValues",
  },
  {
    name: "ord",
    variable: "orderValues",
  },
];
