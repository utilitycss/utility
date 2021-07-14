import postcss from "postcss";

import defineClass from "./defineClass";
import defineSeries from "./defineSeries";
import responsive from "./responsive";
import template from "./template";

import { ApplyRules, PseudoClass } from "../types";

// eslint-disable-next-line @typescript-eslint/ban-types
const applyRules: ApplyRules<{}> = ({
  config,
  globalConfig,
  defaultNames,
  getRules,
  meta,
  classTemplate = "{}",
}) => {
  const {
    names = {},
    whitelist = [],
    blacklist = [],
    isResponsive = false,
    responsiveWhiteList = [],
    responsiveBlackList = [],
    pseudoClasses = {},
    nestedRules,
    modifiersOnly = false,
  } = config || {};

  const {
    breakPoints = {},
    breakPointSeparator = "",
    pseudoClassesSeparator = "",
    seriesSeparator = "",
  } = globalConfig || {};

  const customNames = Object.assign({}, defaultNames, names);
  const customRules = getRules(customNames, config || {});

  const enabledRules = Object.keys(customRules)
    .filter((name) => {
      if (Array.isArray(whitelist) && whitelist.length > 0) {
        // Then filter
        return whitelist.includes(name);
      }
      return true;
    })
    // Blacklist what you dont need
    .filter((name) => !blacklist.includes(name));

  let result = enabledRules.reduce((acc, curr) => {
    const { name, key, value } = customRules[curr];
    const { [curr]: modifiers = [] } = pseudoClasses as {
      [key: string]: PseudoClass[];
    };
    if (Array.isArray(value) || typeof value === "object") {
      acc = acc.concat(
        defineSeries(name, key, value, {
          seriesSeparator,
          pseudoClasses: modifiers,
          pseudoClassesSeparator,
          meta: { ...meta, id: curr },
          classTemplate,
          modifiersOnly,
        })
      );
    } else if (typeof value === "string" || typeof value === "number") {
      const startingArray = modifiersOnly ? [] : [""];
      const singles = startingArray.concat(modifiers).reduce((prev, pseudo) => {
        const separator = pseudo !== "" ? pseudoClassesSeparator : "";
        const pseudoClass = pseudo.replace(/:/g, "");

        return prev.concat(
          defineClass(
            template(
              classTemplate,
              `${name}${separator}${pseudoClass}${pseudo}`
            ),
            { [`${key}`]: value },
            { ...meta, id: curr }
          )
        );
      }, []);
      acc = acc.concat(singles);
    }
    return acc;
  }, []);

  if (isResponsive) {
    const responsiveRules = result
      .filter(({ meta: { id } }) => {
        if (
          Array.isArray(responsiveWhiteList) &&
          responsiveWhiteList.length > 0
        ) {
          return responsiveWhiteList.includes(id);
        }
        return true;
      })
      .filter(({ meta: { id } }) => !responsiveBlackList.includes(id));

    result = result.concat(
      responsive(responsiveRules, breakPoints, {
        breakPointSeparator,
      })
    );
  }

  if (nestedRules) {
    Object.keys(nestedRules).forEach((nestedRule) => {
      const isAtRule = nestedRule[0] === "@";

      if (isAtRule) {
        const name = nestedRule.split(" ")[0].slice(1);
        const nestedRuleNode = postcss.atRule({
          name: name,
          params: nestedRule.split(`${name} `)[1],
          nodes: applyRules({
            config: nestedRules[nestedRule],
            globalConfig,
            defaultNames,
            getRules,
            meta,
          }),
        });

        result = result.concat(nestedRuleNode);
      } else {
        result = result.concat(
          applyRules({
            config: nestedRules[nestedRule],
            globalConfig,
            defaultNames,
            getRules,
            meta,
            classTemplate: nestedRule,
          })
        );
      }
    });
  }

  return result;
};

export default applyRules;
