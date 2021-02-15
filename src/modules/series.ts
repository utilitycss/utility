import { Rule, AtRule } from "postcss";
import defineSeries from "../util/defineSeries";
import responsive from "../util/responsive";

import { PseudoClass, GenericObject, Meta, Module } from "../types";

export type SeriesModuleType = Module<ConfigVariables>;

export interface ConfigVariables {
  values?: GenericObject | string[];
}

const meta: Meta = {
  module: "series",
};

const cssModule: SeriesModuleType = (config) => (globalConfig) => {
  const {
    property,
    className,
    values,
    isResponsive = false,
    pseudoClasses = [],
  } = config;

  const {
    seriesSeparator = "",
    pseudoClassesSeparator = "",
    breakPointSeparator = "",
    breakPoints = {},
  } = globalConfig || {};

  const series: Array<Rule | AtRule> = defineSeries(
    className,
    property,
    values,
    {
      seriesSeparator,
      pseudoClassesSeparator,
      pseudoClasses: pseudoClasses as PseudoClass[],
      meta,
    }
  );

  if (isResponsive) {
    return series.concat(
      responsive(series as Rule[], breakPoints, {
        breakPointSeparator,
      })
    );
  }

  return series;
};

export default cssModule;
