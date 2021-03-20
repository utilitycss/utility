import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  trf: { name: names["trf"], key: "transform", value: cfg.transformValues },
  "trf:n": { name: names["trf:n"], key: "transform", value: "none" },
  trfo: {
    name: names["trfo"],
    key: "transform-origin",
    value: cfg.transformOriginValues,
  },
  "trfs:f": { name: names["trfs:f"], key: "transform-style", value: "flat" },
  "trfs:p": {
    name: names["trfs:p"],
    key: "transform-style",
    value: "preserve-3d",
  },
});

export default getRules;
