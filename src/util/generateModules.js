const postcss = require('postcss');

module.exports = config => {
  const {
    config: globalConfig,
    modules = [],
  } = config

  const nodes = modules.reduce((prev, module) => {
    const moduleNodes = module(globalConfig);
    return prev.concat(moduleNodes);
  }, []);

  return postcss.root({
    nodes,
  });
};

