import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "li:sy": {
    name: names["li:sy"],
    key: "list-style",
    value: cfg.listStyleValues,
  },
});

export default getRules;
