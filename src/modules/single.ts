import { Rule, AtRule } from "postcss";
import defineClass from "../util/defineClass";
import responsive from "../util/responsive";

import { Meta, Module } from "../types";

export type SingleModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values?: string[];
}

const meta: Meta = {
  module: "single",
};

const module: SingleModuleType = (config) => (globalConfig) => {
  const { className, props, isResponsive = false } = config || {};

  const { breakPointSeparator = "", breakPoints = {} } = globalConfig || {};

  const single: Array<Rule | AtRule> = [defineClass(className, props, meta)];

  if (isResponsive) {
    return single.concat(
      responsive(single as Rule[], breakPoints, {
        breakPointSeparator,
      })
    );
  }

  return single;
};

export default module;
