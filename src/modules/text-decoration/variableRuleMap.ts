import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "td:n": { name: names["td:n"], key: "text-decoration", value: "none" },
  "td:u": { name: names["td:u"], key: "text-decoration", value: "underline" },
  "td:o": { name: names["td:o"], key: "text-decoration", value: "overline" },
  "td:l": {
    name: names["td:l"],
    key: "text-decoration",
    value: "line-through",
  },
});

export default getRules;
