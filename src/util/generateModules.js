const postcss = require('postcss');
const generators = require('../modules');

module.exports = config => {
  const {
    config: { prefix = '' },
    config: globalConfig,
    modules = [],
  } = config

  const nodes = modules.reduce((prev, module) => {
    const {
      type,
    } = module;

    const moduleConfig = Object.assign({}, globalConfig, module);
    const moduleNodes = generators[type](moduleConfig);
    return prev.concat(moduleNodes);
  }, []);

  const root = postcss.root({
    nodes,
  });

  if (prefix !== '') {
    root.walkRules(rule => {
      rule.selectors = rule.selectors.map(selector =>
        selector.replace(/\./g, `.${prefix}`)
      );
    });
  }

  return root;
};

