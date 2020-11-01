import postcss from "postcss";

import { GenericObject, Meta } from "../types";

const escapeClassName = (className: string) =>
  className.replace(/([^A-Za-z0-9\-\:\_\ \.])/g, "\\$1"); //eslint-disable-line

type DefineClass = (
  name: string,
  props: GenericObject,
  meta: Meta
) => postcss.Rule;

const defineClass: DefineClass = (name, props, meta: any = {}) => {
  const decls = Object.keys(props).map((prop) =>
    postcss.decl({
      prop,
      value: props[prop] as string,
    })
  );

  return postcss
    .rule({
      selector: `.${escapeClassName(name)}`,
      meta,
    } as any)
    .append(decls);
};

export default defineClass;
