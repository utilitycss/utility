import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names) => ({
  "whs:n": { name: names["whs:n"], key: "white-space", value: "normal" },
  "whs:p": { name: names["whs:p"], key: "white-space", value: "pre" },
  "whs:nw": { name: names["whs:nw"], key: "white-space", value: "nowrap" },
  "whs:pw": { name: names["whs:pw"], key: "white-space", value: "pre-wrap" },
  "whs:pl": { name: names["whs:pl"], key: "white-space", value: "pre-line" },
});

export default getRules;
