const generateModules = require('../util/generateModules');

const resolveUtility = config => css => {
  const { plugins = [] } = config;

  css.walkAtRules('utility', atRule => {
    const modules = generateModules(config);
    const classes = plugins.reduce((nodes, plugin) => {
      return plugin(nodes);
    }, modules);
    atRule.before(classes);
    atRule.remove();
  });
};

module.exports = resolveUtility;