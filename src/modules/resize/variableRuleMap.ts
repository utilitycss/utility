import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "rsz:n": { name: names["rsz:n"], key: "resize", value: "none" },
  "rsz:b": { name: names["rsz:b"], key: "resize", value: "both" },
  "rsz:h": { name: names["rsz:h"], key: "resize", value: "horizontal" },
  "rsz:v": { name: names["rsz:v"], key: "resize", value: "vertical" },
});

export default getRules;
