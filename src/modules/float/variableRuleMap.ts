import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "fl:n": { name: names["fl:n"], key: "float", value: "none" },
  "fl:l": { name: names["fl:l"], key: "float", value: "left" },
  "fl:r": { name: names["fl:r"], key: "float", value: "right" },
});

export default getRules;
