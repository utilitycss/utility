import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "cl:n": { name: names["cl:n"], key: "clear", value: "none" },
  "cl:l": { name: names["cl:l"], key: "clear", value: "left" },
  "cl:r": { name: names["cl:r"], key: "clear", value: "right" },
  "cl:b": { name: names["cl:b"], key: "clear", value: "both" },
});

export default getRules;
