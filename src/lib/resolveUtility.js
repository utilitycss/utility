const generateModules = require('../util/generateModules');

const resolveUtility = config => css => {
  css.walkAtRules('utility', atRule => {
    // TODO: generate all the shit
    const classes = generateModules(config);
    atRule.before(classes);
    atRule.remove();
  });
};

module.exports = resolveUtility;