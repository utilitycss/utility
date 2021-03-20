import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "us:n": { name: names["us:n"], key: "user-select", value: "none" },
  "us:au": { name: names["us:au"], key: "user-select", value: "auto" },
  "us:t": { name: names["us:t"], key: "user-select", value: "text" },
  "us:c": { name: names["us:c"], key: "user-select", value: "contain" },
  "us:a": { name: names["us:a"], key: "user-select", value: "all" },
});

export default getRules;
