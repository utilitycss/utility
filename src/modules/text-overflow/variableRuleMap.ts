import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  trf: {
    name: names["tx:o"],
    key: "text-overflow",
    value: cfg.textOverflowValues,
  },
});

export default getRules;
