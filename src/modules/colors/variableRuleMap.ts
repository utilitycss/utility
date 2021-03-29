import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  c: { name: names["c"], key: "color", value: cfg.colorValues },
  bgc: {
    name: names["bgc"],
    key: "background-color",
    value: cfg.backgroundColorValues,
  },
  bdc: {
    name: names["bdc"],
    key: "border-color",
    value: cfg.borderColorValues,
  },
  bdtc: {
    name: names["bdtc"],
    key: "border-top-color",
    value: cfg.borderColorValues,
  },
  bdrc: {
    name: names["bdrc"],
    key: "border-right-color",
    value: cfg.borderColorValues,
  },
  bdbc: {
    name: names["bdbc"],
    key: "border-bottom-color",
    value: cfg.borderColorValues,
  },
  bdlc: {
    name: names["bdlc"],
    key: "border-left-color",
    value: cfg.borderColorValues,
  },
});

export default getRules;
