import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  ol: { name: names["ol"], key: "outline", value: cfg.outlineValues },
  "ol:n": { name: names["ol:n"], key: "outline", value: "none" },
  olo: {
    name: names["olo"],
    key: "outline-offset",
    value: cfg.outlineOffsetValues,
  },
  olw: {
    name: names["olw"],
    key: "outline-width",
    value: cfg.outlineWidthValues,
  },
  "olw:tn": { name: names["olw:tn"], key: "outline-width", value: "thin" },
  "olw:m": { name: names["olw:m"], key: "outline-width", value: "medium" },
  "olw:tk": { name: names["olw:tk"], key: "outline-width", value: "thick" },
  olc: {
    name: names["olc"],
    key: "outline-color",
    value: cfg.outlineColorValues,
  },
  "olc:i": { name: names["olc:i"], key: "outline-color", value: "invert" },
});

export default getRules;
