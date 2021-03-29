import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "bxsh:n": {
    name: names["bxsh:n"],
    key: "box-shadow",
    value: "none",
  },
  bxsh: {
    name: names["bxsh"],
    key: "box-shadow",
    value: cfg.boxShadowValues,
  },
});

export default getRules;
