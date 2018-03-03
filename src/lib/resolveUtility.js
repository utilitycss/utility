const generateModules = require('../util/generateModules');

const resolveUtility = config => css => {
  css.walkAtRules('utility', atRule => {
    const classes = generateModules(config);
    atRule.before(classes);
    atRule.remove();
  });
};

module.exports = resolveUtility;