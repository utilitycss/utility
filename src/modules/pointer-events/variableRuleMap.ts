import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "pe:n": { name: names["pe:n"], key: "pointer-events", value: "none" },
  "pe:a": { name: names["pe:a"], key: "pointer-events", value: "auto" },
});

export default getRules;
