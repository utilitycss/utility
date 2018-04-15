const defineClass = require("./defineClass");
const defineSeries = require("./defineSeries");
const responsive = require("./responsive");

module.exports = ({ config, globalConfig, defaultNames, getRules, meta }) => {
  const {
    names = {},
    whitelist = [],
    blacklist = [],
    isResponsive = false,
    responsiveWhiteList = [],
    responsiveBlackList = [],
    pseudoClasses = {}
  } =
    config || {};

  const {
    breakPoints = {},
    breakPointSeparator = "",
    pseudoClassesSeparator = "",
    seriesSeparator = ""
  } =
    globalConfig || {};

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
          meta: { ...meta, id: curr }
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
            `${name}${separator}${pseudoClass}${pseudo}`,
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

  return result;
};
