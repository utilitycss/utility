const applyRules = require('../util/applyRules');

const defaultNames = {
    'd:n': 'dn',
    'd:b': 'db',
    'd:f': 'df',
    'd:if': 'dif',
    'd:i': 'di',
    'd:ib': 'dib',
    'd:li': 'dli',
    'd:ri': 'dri',
    'd:cp': 'dcp',
    'd:tb': 'dtb',
    'd:itb': 'ditb',
    'd:tbcp': 'dtbcp',
    'd:tbcl': 'dtbcl',
    'd:tbclg': 'dtbclg',
    'd:tbhg': 'dtbhg',
    'd:tbfg': 'dtbfg',
    'd:tbr': 'dtbr',
    'd:tbrg': 'dtbrg',
    'd:tbc': 'dtbc',
    'd:rb': 'drb',
    'd:rbb': 'drbb',
    'd:rbbg': 'drbbg',
    'd:rbt': 'drbt',
    'd:rbtg': 'drbtg',
};

const getRules = (names, cfg) => ({
    'd:n': { n: names['d:n'], k: 'display', v: 'none' },
    'd:b': { n: names['d:b'], k: 'display', v: 'block' },
    'd:f': { n: names['d:f'], k: 'display', v: 'flex' },
    'd:if': { n: names['d:if'], k: 'display', v: 'inline-flex' },
    'd:i': { n: names['d:i'], k: 'display', v: 'inline' },
    'd:ib': { n: names['d:ib'], k: 'display', v: 'inline-block' },
    'd:li': { n: names['d:li'], k: 'display', v: 'list-item' },
    'd:ri': { n: names['d:ri'], k: 'display', v: 'run-in' },
    'd:cp': { n: names['d:cp'], k: 'display', v: 'compact' },
    'd:tb': { n: names['d:tb'], k: 'display', v: 'table' },
    'd:itb': { n: names['d:itb'], k: 'display', v: 'inline-table' },
    'd:tbcp': { n: names['d:tbcp'], k: 'display', v: 'table-caption' },
    'd:tbcl': { n: names['d:tbcl'], k: 'display', v: 'table-column' },
    'd:tbclg': { n: names['d:tbclg'], k: 'display', v: 'table-column-group' },
    'd:tbhg': { n: names['d:tbhg'], k: 'display', v: 'table-header-group' },
    'd:tbfg': { n: names['d:tbfg'], k: 'display', v: 'table-footer-group' },
    'd:tbr': { n: names['d:tbr'], k: 'display', v: 'table-row' },
    'd:tbrg': { n: names['d:tbrg'], k: 'display', v: 'table-row-group' },
    'd:tbc': { n: names['d:tbc'], k: 'display', v: 'table-cell' },
    'd:rb': { n: names['d:rb'], k: 'display', v: 'ruby' },
    'd:rbb': { n: names['d:rbb'], k: 'display', v: 'ruby-base' },
    'd:rbbg': { n: names['d:rbbg'], k: 'display', v: 'ruby-base-group' },
    'd:rbt': { n: names['d:rbt'], k: 'display', v: 'ruby-text' },
    'd:rbtg': { n: names['d:rbtg'], k: 'display', v: 'ruby-text-group' },
});

module.exports = config => globalConfig => {
    return applyRules(config, globalConfig, defaultNames, getRules);
}