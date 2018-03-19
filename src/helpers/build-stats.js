const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const cssstats = require('cssstats');

module.exports = function({ atomCss }) {
  const {
    humanizedSize: size,
    humanizedGzipSize: gzippedSize,
    rules: { total: totalRules } = {},
    selectors: {
      total: totalSelectors,
      class: selectorsClass,
      id: selectorsId,
      pseudoClass: selectorsPseudoClass,
      pseudoElement: selectorsPseudoElement,
      specificity: { average: selectorsSpecificity } = {},
    } = {},
    declarations: { total: totalDecls, unique: uniqueDecls } = {},
    mediaQueries: { total: totalMedia } = {},
  } = cssstats(atomCss);

  const statsTemplate = _.template(
    fs.readFileSync(path.join(__dirname, 'templates', 'stats.html'), 'utf8'),
  );
  const statsHtml = statsTemplate({
    overview: {
      size,
      gzippedSize,
      totalRules,
      totalDecls,
      totalMedia,
    },
    selectors: {
      total: totalSelectors,
      class: selectorsClass,
      id: selectorsId,
      pClass: selectorsPseudoClass,
      pElement: selectorsPseudoElement,
      specificity: Math.round(selectorsSpecificity),
    },
    declarations: {
      total: totalDecls,
      unique: uniqueDecls,
    },
  });
  return statsHtml;
};
