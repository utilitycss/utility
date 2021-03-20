import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  backgroundImageValues?: GenericObject | string[];
  backgroundPositionValues?: GenericObject | string[];
  backgroundPositionXValues?: GenericObject | string[];
  backgroundPositionYValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  bgi: "bgi",
  "bgi:n": "bgin",
  "bgr:n": "bgrn",
  "bgr:x": "bgrx",
  "bgr:y": "bgry",
  "bgr:sp": "bgrsp",
  "bgr:rd": "bgrrd",
  "bga:f": "bgaf",
  "bga:s": "bgas",
  bgp: "bgp",
  bgpx: "bgpx",
  bgpy: "bgpy",
  "bgcp:bb": "bgcpbb",
  "bgcp:pb": "bgcppb",
  "bgcp:cb": "bgcpcb",
  "bgo:bb": "bgobb",
  "bgo:pb": "bgopb",
  "bgo:cb": "bgocb",
  "bgsz:a": "bgsza",
  "bgsz:ct": "bgszct",
  "bgsz:cv": "bgszcv",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "bgi",
    variable: "backgroundImageValues",
  },
  {
    name: "bgp",
    variable: "backgroundPositionValues",
  },
  {
    name: "bgpx",
    variable: "backgroundPositionXValues",
  },
  {
    name: "bgpy",
    variable: "backgroundPositionYValues",
  },
];
