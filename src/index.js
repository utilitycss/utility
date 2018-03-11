const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const resolveUtility = require('./lib/resolveUtility');
const plugins = require('./plugins');
const modules = require('./modules');
const util = require('./util');

const builder = postcss.plugin('utility', config => {
  let usedConfig = config;
  const localConfigPath = path.resolve('utility.config.js');
  if (usedConfig === undefined && fs.existsSync(localConfigPath)) {
    config = require(localConfigPath);
  }
  return postcss(resolveUtility(config));
});

module.exports = {
  builder,
  plugins,
  modules,
  util,
};
