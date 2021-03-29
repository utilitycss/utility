import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  lts: { name: names["lts"], key: "letter-spacing", value: cfg.values },
  "lts:n": { name: names["lts:n"], key: "letter-spacing", value: "normal" },
});

export default getRules;
