import { Root } from "postcss";
import { GlobalUtilityConfig } from "../types";

export default (config: Pick<GlobalUtilityConfig, "prefix">) => (
  root: Root
): Root => {
  const { prefix = "" } = config;

  root.walkRules((rule) => {
    rule.selectors = rule.selectors.map((selector) =>
      selector.replace(/\./g, `.${prefix}`)
    );
  });

  return root;
};
