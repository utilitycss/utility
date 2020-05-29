const postcss = require("postcss");
const defineClass = require("./defineClass");
const defineSeries = require("./defineSeries");
const responsive = require("./responsive");
const template = require("./template");

const applyRules = ({
  config,
  globalConfig,
  defaultNames,
  getRules,
  meta,
  classTemplate = "{}"
}) => {
  const {
    names = {},
    whitelist = [],
    blacklist = [],
    isResponsive = false,
    responsiveWhiteList = [],
    responsiveBlackList = [],
    pseudoClasses = {},
    nestedRules
  } = config || {};

  const {
    breakPoints = {},
    breakPointSeparator = "",
    pseudoClassesSeparator = "",
    seriesSeparator = ""
  } = globalConfig || {};

  const customNames = Object.assign({}, defaultNames, names);
  const customRules = getRules(customNames, config || {});

  const enabledRules = Object.keys(customRules)
    .filter(name => {
      if (Array.isArray(whitelist) && whitelist.length > 0) {
        // Then filter
        return whitelist.includes(name);
      }
      return true;
    })
    // Blacklist what you dont need
    .filter(name => !blacklist.includes(name));

  let result = enabledRules.reduce((acc, curr) => {
    const { name, key, value } = customRules[curr];
    const { [curr]: modifiers = [] } = pseudoClasses;
    if (Array.isArray(value) || typeof value === "object") {
      acc = acc.concat(
        defineSeries(name, key, value, {
          seriesSeparator,
          pseudoClasses: modifiers,
          pseudoClassesSeparator,
          meta: { ...meta, id: curr },
          classTemplate
        })
      );
    } else if (typeof value === "string" || typeof value === "number") {
      // FIX ME: WHAT IS this for?
      // eslint-disable-next-line
      const singles = [""].concat(modifiers).reduce((prev, pseudo) => {
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
        breakPointSeparator
      })
    );
  }

  if (nestedRules) {
    Object.keys(nestedRules).forEach(nestedRule => {
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
            meta
          })
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
            classTemplate: nestedRule
          })
        );
      }
    });
  }

  return result;
};

module.exports = applyRules;
