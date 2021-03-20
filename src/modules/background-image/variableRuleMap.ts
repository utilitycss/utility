import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  bgi: {
    name: names["bgi"],
    key: "background-image",
    value: cfg.backgroundImageValues,
  },
  "bgi:n": { name: names["bgi:n"], key: "background-image", value: "none" },
  "bgr:n": {
    name: names["bgr:n"],
    key: "background-repeat",
    value: "no-repeat",
  },
  "bgr:x": {
    name: names["bgr:x"],
    key: "background-repeat",
    value: "repeat-x",
  },
  "bgr:y": {
    name: names["bgr:y"],
    key: "background-repeat",
    value: "repeat-y",
  },
  "bgr:rd": {
    name: names["bgr:rd"],
    key: "background-repeat",
    value: "round",
  },
  "bga:f": {
    name: names["bga:f"],
    key: "background-attachment",
    value: "fixed",
  },
  "bga:s": {
    name: names["bga:s"],
    key: "background-attachment",
    value: "scroll",
  },
  bgp: {
    name: names["bgp"],
    key: "background-position",
    value: cfg.backgroundPositionValues,
  },
  bgpx: {
    name: names["bgpx"],
    key: "background-position-x",
    value: cfg.backgroundPositionXValues,
  },
  bgpy: {
    name: names["bgpy"],
    key: "background-position-y",
    value: cfg.backgroundPositionYValues,
  },
  "bgcp:bb": {
    name: names["bgcp:bb"],
    key: "background-clip",
    value: "border-box",
  },
  "bgcp:pb": {
    name: names["bgcp:pb"],
    key: "background-clip",
    value: "padding-box",
  },
  "bgcp:cb": {
    name: names["bgcp:cb"],
    key: "background-clip",
    value: "content-box",
  },
  "bgo:bb": {
    name: names["bgo:bb"],
    key: "background-origin",
    value: "border-box",
  },
  "bgo:pb": {
    name: names["bgo:pb"],
    key: "background-origin",
    value: "padding-box",
  },
  "bgo:cb": {
    name: names["bgo:cb"],
    key: "background-origin",
    value: "content-box",
  },
  "bgsz:a": { name: names["bgsz:a"], key: "background-size", value: "auto" },
  "bgsz:ct": {
    name: names["bgsz:ct"],
    key: "background-size",
    value: "contain",
  },
  "bgsz:cv": { name: names["bgsz:cv"], key: "background-size", value: "cover" },
});

export default getRules;
