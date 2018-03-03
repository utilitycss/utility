const postcss = require('postcss');
const generators = require('../modules');

module.exports = config => {
  const {
    modules = [],
  } = config

  const nodes = modules.reduce((prev, module) => {
    const {
      type,
    } = module;

    const moduleNodes = generators[type](module);
    return prev.concat(moduleNodes);
  }, []);

  return postcss.root({
    nodes,
  });
};

