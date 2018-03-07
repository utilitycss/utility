const postcss = require('postcss');

module.exports = (rules, breakpoints = {}, options = {}) => {
  const { breakPointSeparator = '' } = options;

  return Object.keys(breakpoints).map(bp => {
    const nodes = rules.map(rule => {
      const newRule = rule.clone();
      newRule.selector = `${rule.selector}${breakPointSeparator}${bp}`;
      return newRule;
    });

    return postcss.atRule({
      name: `media (${breakpoints[bp]})`,
      nodes,
    });
  });
};
