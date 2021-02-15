import { Rule } from "postcss";
import defineClass from "./defineClass";
import template from "./template";

import { GlobalUtilityConfig, GenericObject, UtilityConfig } from "../types";

type Options = Pick<
  GlobalUtilityConfig,
  "seriesSeparator" | "pseudoClassesSeparator" | "classTemplate"
> &
  Pick<UtilityConfig<any>, "pseudoClasses" | "meta">;

type DefineSeries = (
  name: string | number,
  prop: string,
  values: GenericObject | string[],
  options?: Options
) => Rule[];

const defineSeries: DefineSeries = (
  name,
  prop,
  values,
  options = {} as Options
) => {
  const {
    seriesSeparator = "",
    pseudoClassesSeparator = "",
    pseudoClasses = [],
    meta = {},
    classTemplate = "{}",
  } = options;

  return [""].concat(pseudoClasses).reduce((prev, pseudo) => {
    const pseudoSeparator = pseudo !== "" ? pseudoClassesSeparator : "";
    const separator = name !== "" ? seriesSeparator : "";
    const pseudoClass = pseudo.replace(/:/g, "");
    const nodes = Object.keys(values).map((value) =>
      defineClass(
        template(
          classTemplate,
          `${name}${separator}${value}${pseudoSeparator}${pseudoClass}${pseudo}`
        ),
        {
          [`${prop}`]: (values as GenericObject)[value],
        },
        meta
      )
    );
    return prev.concat(nodes);
  }, []);
};

export default defineSeries;
