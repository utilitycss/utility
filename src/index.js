const postcss = require('postcss');
const resolveUtility = require('./lib/resolveUtility');

const utility = postcss.plugin('utility', config => {
  return postcss(
    resolveUtility(config)
  );
});

module.exports = utility;