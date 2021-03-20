import { GetRules } from "../../types";

import { ConfigVariables } from "./declarations";

/**
 *
 * @param names CSS declarations
 * @param cfg Module config
 * @returns
 */
const getRules: GetRules<ConfigVariables> = (names, cfg) => ({
  "pos:s": { name: names["pos:s"], key: "position", value: "static" },
  "pos:a": { name: names["pos:a"], key: "position", value: "absolute" },
  "pos:r": { name: names["pos:r"], key: "position", value: "relative" },
  "pos:f": { name: names["pos:f"], key: "position", value: "fixed" },
  "pos:stky": { name: names["pos:stky"], key: "position", value: "sticky" },
  t: { name: names["t"], key: "top", value: cfg.topValues },
  "t:a": { name: names["t:a"], key: "top", value: "auto" },
  r: { name: names["r"], key: "right", value: cfg.rightValues },
  "r:a": { name: names["r:a"], key: "right", value: "auto" },
  b: { name: names["b"], key: "bottom", value: cfg.bottomValues },
  "b:a": { name: names["b:a"], key: "bottom", value: "auto" },
  l: { name: names["l"], key: "left", value: cfg.leftValues },
  "l:a": { name: names["l:a"], key: "left", value: "auto" },
});

export default getRules;
