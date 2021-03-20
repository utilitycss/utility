import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  borderValues?: GenericObject | string[];
  borderWidthValues?: GenericObject | string[];
  borderStyleValues?: GenericObject | string[];
  borderImageValues?: GenericObject | string[];
  borderTopValues?: GenericObject | string[];
  borderTopWidthValues?: GenericObject | string[];
  borderTopStyleValues?: GenericObject | string[];
  borderRightValues?: GenericObject | string[];
  borderRightWidthValues?: GenericObject | string[];
  borderRightStyleValues?: GenericObject | string[];
  borderBottomValues?: GenericObject | string[];
  borderBottomWidthValues?: GenericObject | string[];
  borderBottomStyleValues?: GenericObject | string[];
  borderLeftValues?: GenericObject | string[];
  borderLeftWidthValues?: GenericObject | string[];
  borderLeftStyleValues?: GenericObject | string[];
  borderRadiusValues?: GenericObject | string[];
  borderTopRightRadiusValues?: GenericObject | string[];
  borderTopLeftRadiusValues?: GenericObject | string[];
  borderBottomRightRadiusValues?: GenericObject | string[];
  borderBottomLeftRadiusValues?: GenericObject | string[];
  borderSpacingValues?: GenericObject | string[];
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  bd: "bd",
  "bd:n": "bdn",
  "bd:w": "bdw",
  "bd:s": "bds",
  "bdcl:c": "bdclc",
  "bdcl:s": "bdcls",
  bdi: "bdi",
  "bdi:n": "bdin",
  bdt: "bdt",
  "bdt:n": "bdtn",
  "bdt:w": "bdtw",
  "bdt:s": "bdts",
  bdr: "bdr",
  "bdr:n": "bdrn",
  "bdr:w": "bdrw",
  "bdr:s": "bdrs",
  bdb: "bdb",
  "bdb:n": "bdbn",
  "bdb:w": "bdbw",
  "bdb:s": "bdbs",
  bdl: "bdl",
  "bdl:n": "bdln",
  "bdl:w": "bdlw",
  "bdl:s": "bdls",
  bdrs: "bdrs",
  bdtrrs: "bdtrrs",
  bdtlrs: "bdtlrs",
  bdbrrs: "bdbrrs",
  bdblrs: "bdblrs",
  bdsp: "bdsp",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "bd",
    variable: "borderValues",
  },
  {
    name: "bd:w",
    variable: "borderWidthValues",
  },
  {
    name: "bd:s",
    variable: "borderStyleValues",
  },
  {
    name: "bdi",
    variable: "borderImageValues",
  },
  {
    name: "bdt",
    variable: "borderTopValues",
  },
  {
    name: "bdt:w",
    variable: "borderTopWidthValues",
  },
  {
    name: "bdt:s",
    variable: "borderTopStyleValues",
  },
  {
    name: "bdr",
    variable: "borderRightValues",
  },
  {
    name: "bdr:w",
    variable: "borderRightWidthValues",
  },
  {
    name: "bdr:s",
    variable: "borderRightStyleValues",
  },
  {
    name: "bdb",
    variable: "borderBottomValues",
  },
  {
    name: "bdb:w",
    variable: "borderBottomWidthValues",
  },
  {
    name: "bdb:s",
    variable: "borderBottomStyleValues",
  },
  {
    name: "bdl",
    variable: "borderLeftValues",
  },
  {
    name: "bdl:w",
    variable: "borderLeftWidthValues",
  },
  {
    name: "bdl:s",
    variable: "borderLeftStyleValues",
  },
  {
    name: "bdrs",
    variable: "borderRadiusValues",
  },
  {
    name: "bdtrrs",
    variable: "borderTopRightRadiusValues",
  },
  {
    name: "bdtlrs",
    variable: "borderTopLeftRadiusValues",
  },
  {
    name: "bdbrrs",
    variable: "borderBottomRightRadiusValues",
  },
  {
    name: "bdbrrs",
    variable: "borderBottomLeftRadiusValues",
  },
  {
    name: "bdsp",
    variable: "borderSpacingValues",
  },
];
