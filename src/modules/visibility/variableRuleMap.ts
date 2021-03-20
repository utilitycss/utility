import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "v:v": { name: names["v:v"], key: "visibility", value: "visible" },
  "v:h": { name: names["v:h"], key: "visibility", value: "hidden" },
  "v:c": { name: names["v:c"], key: "visibility", value: "collapse" },
});

export default getRules;
