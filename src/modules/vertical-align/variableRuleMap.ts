import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "va:sup": { name: names["va:sup"], key: "vertical-align", value: "super" },
  "va:t": { name: names["va:t"], key: "vertical-align", value: "top" },
  "va:tt": { name: names["va:tt"], key: "vertical-align", value: "text-top" },
  "va:m": { name: names["va:m"], key: "vertical-align", value: "middle" },
  "va:bl": { name: names["va:bl"], key: "vertical-align", value: "baseline" },
  "va:b": { name: names["va:b"], key: "vertical-align", value: "bottom" },
  "va:tb": {
    name: names["va:tb"],
    key: "vertical-align",
    value: "text-bottom",
  },
  "va:sub": { name: names["va:sub"], key: "vertical-align", value: "sub" },
});

export default getRules;
