module.exports = config => root => {
  const { prefix = '' } = config;

  root.walkRules(rule => {
    rule.selectors = rule.selectors.map(selector =>
      selector.replace(/\./g, `.${prefix}`)
    );
  });

  return root;
}
