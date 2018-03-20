const defineClass = require("./defineClass");
const defineSeries = require("./defineSeries");
const responsive = require("./responsive");

module.exports = ({ config, globalConfig, defaultNames, getRules, meta }) => {
  const {
    names = {},
    whitelist = [],
    blacklist = [],
    isResponsive = false,
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

  const enabledRules =
    whitelist.length > 0
      ? Object.keys(customRules)
          .filter(r => whitelist.includes(r))
          .filter(r => !blacklist.includes(r))
      : Object.keys(customRules).filter(r => !blacklist.includes(r));

  let result = enabledRules.reduce((p, r) => {
    const rule = customRules[r];
    const { [`${rule.n}`]: modifiers = [] } = pseudoClasses;
    if (Array.isArray(rule.v) || typeof rule.v === "object") {
      p = p.concat(
        defineSeries(rule.n, rule.k, rule.v, {
          seriesSeparator,
          pseudoClasses: modifiers,
          pseudoClassesSeparator,
          meta
        })
      );
    } else if (typeof rule.v === "string" || typeof rule.v === "number") {
      const singles = [""].concat(modifiers).reduce((prev, pseudo) => {
        const separator = pseudo !== "" ? pseudoClassesSeparator : "";
        const pseudoClass = pseudo.replace(/:/g, "");

        return defineClass(
          `${rule.n}${separator}${pseudoClass}${pseudo}`,
          { [`${rule.k}`]: rule.v },
          meta
        );
      }, []);
      p = p.concat(defineClass(rule.n, { [`${rule.k}`]: rule.v }, meta));
    }
    return p;
  }, []);

  if (isResponsive) {
    result = result.concat(
      responsive(result, breakPoints, {
        breakPointSeparator
      })
    );
  }

  return result;
};
