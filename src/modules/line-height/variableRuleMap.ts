import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  lh: { name: names["lh"], key: "line-height", value: cfg.values },
});

export default getRules;
