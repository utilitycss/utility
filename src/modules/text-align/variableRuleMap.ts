import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "ta:l": { name: names["ta:l"], key: "text-align", value: "left" },
  "ta:c": { name: names["ta:c"], key: "text-align", value: "center" },
  "ta:r": { name: names["ta:r"], key: "text-align", value: "right" },
  "ta:j": { name: names["ta:j"], key: "text-align", value: "justify" },
  "tal:a": { name: names["tal:a"], key: "text-align-last", value: "auto" },
  "tal:l": { name: names["tal:l"], key: "text-align-last", value: "left" },
  "tal:c": { name: names["tal:c"], key: "text-align-last", value: "center" },
  "tal:r": { name: names["tal:r"], key: "text-align-last", value: "right" },
});

export default getRules;
