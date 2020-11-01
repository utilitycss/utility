import postcss from "postcss";
import { GlobalUtilityConfig } from "../types";

type Responsive = (
  rules: postcss.Rule[],
  breakpoints?: GlobalUtilityConfig["breakPoints"],
  options?: Pick<GlobalUtilityConfig, "breakPointSeparator">
) => postcss.AtRule[];

const responsive: Responsive = (rules, breakpoints = {}, options) => {
  const { breakPointSeparator = "" } = options || {};

  return Object.keys(breakpoints).map((bp) => {
    const nodes = rules.map((rule) => {
      const newRule = rule.clone();
      const matchPseudo = rule.selector.match(/:([\w\d_-]+)/);
      if (matchPseudo) {
        newRule.selector = `${rule.selector.replace(
          matchPseudo[0],
          ""
        )}${breakPointSeparator}${bp}${matchPseudo[0]}`;
      } else {
        newRule.selector = `${rule.selector}${breakPointSeparator}${bp}`;
      }
      return newRule;
    });

    const mediaRule = postcss.atRule({
      name: "media",

      params: breakpoints[bp],
      nodes,
    });

    for (const node of mediaRule.nodes) {
      node.parent = mediaRule;
    }

    return mediaRule;
  });
};

export default responsive;
