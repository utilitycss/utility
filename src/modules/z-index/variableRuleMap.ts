import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  z: { name: names["z"], key: "z-index", value: cfg.values },
  "z:a": { name: names["z:a"], key: "z-index", value: "auto" },
});

export default getRules;
