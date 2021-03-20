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
  "ov:v": "ovv",
  "ov:h": "ovh",
  "ov:s": "ovs",
  "ov:a": "ova",
  "ovx:v": "ovxv",
  "ovx:h": "ovxh",
  "ovx:s": "ovxs",
  "ovx:a": "ovxa",
  "ovy:v": "ovyv",
  "ovy:h": "ovyh",
  "ovy:s": "ovys",
  "ovy:a": "ovya",
  "ovs:a": "ovsa",
  "ovs:s": "ovss",
  "ovs:p": "ovsp",
  "ovs:m": "ovsm",
  "ovs:mq": "ovsmq",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [];
