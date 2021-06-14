import postcss, { Rule } from "postcss";

import { GenericObject, Meta } from "../types";

const globalRE = /(:global\(.*\))\s*(.*)/;

const escapeClassName = (className: string) =>
  className.replace(/([^A-Za-z0-9\-\:\_\ \.])/g, "\\$1"); //eslint-disable-line

const makeSelector = (className: string) => {
  const matches = className.match(globalRE);
  if (matches) {
    return `${matches[1]} ${escapeClassName(matches[2])}`;
  }
  return `.${escapeClassName(className)}`;
};

type DefineClass = (name: string, props: GenericObject, meta: Meta) => Rule;

const defineClass: DefineClass = (name, props, meta: any = {}) => {
  const decls = Object.keys(props).map((prop) =>
    postcss.decl({
      prop,
      value: props[prop] as string,
    })
  );

  return postcss
    .rule({
      selector: makeSelector(name),
      meta,
    } as any)
    .append(decls);
};

export default defineClass;
