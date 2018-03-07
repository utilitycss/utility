const fs = require('fs');

module.exports = config => root => {
  const { output } = config || {};

  const modules = {};

  let content = '';

  root.walkRules(rule => {
    const { meta: { module } } = rule;
    if (Array.isArray(modules[module])) {
      modules[module].push(rule);
    } else {
      modules[module] = [rule];
    }
  });

  const links = Object.keys(modules).map(m => {
    return `<li class="index-item"><a href="#${m}">${m}</a></li>`;
  });

  const index = `<div class=index><ul class="index-list">${links.join(
    '',
  )}</ul></div>`;

  content += index;

  const defs = Object.keys(modules).map(m => {
    const rules = modules[m].map(r => {
      return `<div class="rule ${r.selector.replace('.', '')}">${
        r.selector
      }</div><div class="code">{ ${r.nodes}; }</div>`;
    });

    return `<h1><a name="${m}">${m}</a></h1>${rules.join('')}`;
  });

  defs.forEach(d => (content += d));

  if (output) {
    fs.writeFileSync(output, content);
  } else {
    process.stdout.write(content);
  }

  return root;
};
