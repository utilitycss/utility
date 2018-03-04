const postcss = require('postcss');
const resolveUtility = require('./lib/resolveUtility');
const plugins = require('./plugins');
const modules = require('./modules');

const builder = postcss.plugin('utility', config => {
  return postcss(
    resolveUtility(config)
  );
});

module.exports = {
  builder,
  plugins,
  modules,
}