import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  h: { name: names["h"], key: "height", value: cfg.heightValues },
  "h:a": { name: names["h:a"], key: "height", value: "auto" },
  mah: { name: names["mah"], key: "max-height", value: cfg.maxHeightValues },
  "mah:n": { name: names["mah:n"], key: "max-height", value: "none" },
  mih: { name: names["mih"], key: "min-height", value: cfg.minHeightValues },
});

export default getRules;
