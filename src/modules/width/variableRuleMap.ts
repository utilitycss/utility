import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  w: { name: names["w"], key: "width", value: cfg.widthValues },
  "w:a": { name: names["w:a"], key: "width", value: "auto" },
  maw: { name: names["maw"], key: "max-width", value: cfg.maxWidthValues },
  "maw:n": { name: names["maw:n"], key: "max-width", value: "none" },
  miw: { name: names["miw"], key: "min-width", value: cfg.minWidthValues },
});

export default getRules;
