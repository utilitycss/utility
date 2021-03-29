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
  "d:n": "dn",
  "d:b": "db",
  "d:f": "df",
  "d:g": "dg",
  "d:if": "dif",
  "d:i": "di",
  "d:ib": "dib",
  "d:li": "dli",
  "d:ri": "dri",
  "d:cp": "dcp",
  "d:tb": "dtb",
  "d:itb": "ditb",
  "d:tbcp": "dtbcp",
  "d:tbcl": "dtbcl",
  "d:tbclg": "dtbclg",
  "d:tbhg": "dtbhg",
  "d:tbfg": "dtbfg",
  "d:tbr": "dtbr",
  "d:tbrg": "dtbrg",
  "d:tbc": "dtbc",
  "d:rb": "drb",
  "d:rbb": "drbb",
  "d:rbbg": "drbbg",
  "d:rbt": "drbt",
  "d:rbtg": "drbtg",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
