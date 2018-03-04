const postcss = require('postcss');
const generators = require('../modules');

module.exports = config => {
  const {
    config: globalConfig,
    modules = [],
  } = config

  const nodes = modules.reduce((prev, module) => {
    const generator = typeof module !== 'function'
      ? generators['single'](module)
      : module;
    const moduleNodes = generator(globalConfig);
    return prev.concat(moduleNodes);
  }, []);

  const root = postcss.root({
    nodes,
  });

  return root;
};

