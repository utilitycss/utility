import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "cur:a": { name: names["cur:a"], key: "cursor", value: "auto" },
  "cur:d": { name: names["cur:d"], key: "cursor", value: "default" },
  "cur:c": { name: names["cur:c"], key: "cursor", value: "crosshair" },
  "cur:ha": { name: names["cur:ha"], key: "cursor", value: "hand" },
  "cur:he": { name: names["cur:he"], key: "cursor", value: "help" },
  "cur:m": { name: names["cur:m"], key: "cursor", value: "move" },
  "cur:p": { name: names["cur:p"], key: "cursor", value: "pointer" },
  "cur:t": { name: names["cur:t"], key: "cursor", value: "text" },
});

export default getRules;
