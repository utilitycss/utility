import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "bxz:cb": { name: names["bxz:cb"], key: "box-sizing", value: "content-box" },
  "bxz:bb": { name: names["bxz:bb"], key: "box-sizing", value: "border-box" },
});

export default getRules;
