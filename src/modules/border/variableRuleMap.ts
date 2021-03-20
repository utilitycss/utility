import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  bd: { name: names["bd"], key: "border", value: cfg.borderValues },
  "bd:n": { name: names["bd:n"], key: "border", value: "none" },
  "bd:w": {
    name: names["bd:w"],
    key: "border-width",
    value: cfg.borderWidthValues,
  },
  "bd:s": {
    name: names["bd:s"],
    key: "border-style",
    value: cfg.borderStyleValues,
  },
  "bdcl:c": {
    name: names["bdcl:c"],
    key: "border-collapse",
    value: "collapse",
  },
  "bdcl:s": {
    name: names["bdcl:s"],
    key: "border-collapse",
    value: "separate",
  },
  bdi: {
    name: names["bdi"],
    key: "border-image",
    value: cfg.borderImageValues,
  },
  "bdi:n": { name: names["bdi:n"], key: "border-image", value: "none" },
  bdt: { name: names["bdt"], key: "border-top", value: cfg.borderTopValues },
  "bdt:w": {
    name: names["bdt:w"],
    key: "border-top-width",
    value: cfg.borderTopWidthValues,
  },
  "bdt:s": {
    name: names["bdt:s"],
    key: "border-top-style",
    value: cfg.borderTopStyleValues,
  },
  "bdt:n": { name: names["bdt:n"], key: "border-top", value: "none" },
  bdr: {
    name: names["bdr"],
    key: "border-right",
    value: cfg.borderRightValues,
  },
  "bdr:w": {
    name: names["bdr:w"],
    key: "border-right-width",
    value: cfg.borderRightWidthValues,
  },
  "bdr:s": {
    name: names["bdr:s"],
    key: "border-right-style",
    value: cfg.borderRightStyleValues,
  },
  "bdr:n": { name: names["bdr:n"], key: "border-right", value: "none" },
  bdb: {
    name: names["bdb"],
    key: "border-bottom",
    value: cfg.borderBottomValues,
  },
  "bdb:w": {
    name: names["bdb:w"],
    key: "border-bottom-width",
    value: cfg.borderBottomWidthValues,
  },
  "bdb:s": {
    name: names["bdb:s"],
    key: "border-bottom-style",
    value: cfg.borderBottomStyleValues,
  },
  "bdb:n": { name: names["bdb:n"], key: "border-bottom", value: "none" },
  bdl: { name: names["bdl"], key: "border-left", value: cfg.borderLeftValues },
  "bdl:w": {
    name: names["bdl:w"],
    key: "border-left-width",
    value: cfg.borderLeftWidthValues,
  },
  "bdl:s": {
    name: names["bdl:s"],
    key: "border-left-style",
    value: cfg.borderLeftStyleValues,
  },
  "bdl:n": { name: names["bdl:n"], key: "border-left", value: "none" },
  bdrs: {
    name: names["bdrs"],
    key: "border-radius",
    value: cfg.borderRadiusValues,
  },
  bdtrrs: {
    name: names["bdtrrs"],
    key: "border-top-right-radius",
    value: cfg.borderTopRightRadiusValues,
  },
  bdtlrs: {
    name: names["bdtlrs"],
    key: "border-top-left-radius",
    value: cfg.borderTopLeftRadiusValues,
  },
  bdbrrs: {
    name: names["bdbrrs"],
    key: "border-bottom-right-radius",
    value: cfg.borderBottomRightRadiusValues,
  },
  bdblrs: {
    name: names["bdblrs"],
    key: "border-bottom-left-radius",
    value: cfg.borderBottomLeftRadiusValues,
  },
  bdsp: {
    name: names["bdsp"],
    key: "border-spacing",
    value: cfg.borderSpacingValues,
  },
});

export default getRules;
