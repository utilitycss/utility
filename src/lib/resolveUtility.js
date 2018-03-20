const generateModules = require("../util/generateModules");

const resolveUtility = config => css => {
  const { plugins = [] } = config || {};

  const modules = generateModules(config);
  const classes = plugins.reduce((nodes, plugin) => {
    return plugin(nodes);
  }, modules);

  // use @import utility insertion point
  css.walkAtRules("utility", atRule => {
    atRule.before(classes);
    atRule.remove();
  });
  if (config && config.forceInsert) {
    // prepend required normalize rules
    css.prepend(classes);
  }
};

module.exports = resolveUtility;
