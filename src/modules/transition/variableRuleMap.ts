import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  trs: { name: names["trs"], key: "transition", value: cfg.transitionValues },
  trsde: {
    name: names["trsde"],
    key: "transition-delay",
    value: cfg.transitionDelayValues,
  },
  trsdu: {
    name: names["trsdu"],
    key: "transition-duration",
    value: cfg.transitionDurationValues,
  },
  trsp: {
    name: names["trsp"],
    key: "transition-property",
    value: cfg.transitionPropertyValues,
  },
  "trsp:n": {
    name: names["trsp:n"],
    key: "transition-property",
    value: "none",
  },
  "trsp:a": {
    name: names["trsp:a"],
    key: "transition-property",
    value: "all",
  },
  trstf: {
    name: names["trstf"],
    key: "transition-timing-function",
    value: cfg.transitionTimingFunctionValues,
  },
});

export default getRules;
