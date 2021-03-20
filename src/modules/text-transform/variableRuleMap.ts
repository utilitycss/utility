import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "tt:n": { name: names["tt:n"], key: "text-transform", value: "none" },
  "tt:c": { name: names["tt:c"], key: "text-transform", value: "capitalize" },
  "tt:u": { name: names["tt:u"], key: "text-transform", value: "uppercase" },
  "tt:l": { name: names["tt:l"], key: "text-transform", value: "lowercase" },
});

export default getRules;
