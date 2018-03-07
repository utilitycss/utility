const defineClass = require('./src/util/defineClass');
const {
    plugins: {
        prefix,
    },
    modules: {
      single,
      series,
      spacing,
      position,
      zIndex,
      float,
      clear,
      display,
      visibility,
      overflow,
    },
} = require('@utilitycss/utility');

const customModule = () => () => {
    return [defineClass('custom', { foo: 'bar' })];
};

const breakPoints = {
    ns: 'screen and (min-width: 30em)',
    m: 'screen and (min-width: 30em) and (max-width: 60em)',
    l: 'screen and (min-width: 60em)',
};

const spacingScale = ['1rem', '2rem', '3rem', '4rem'];
const directions = {
    '': '',
    't': '-top',
    'r': '-right',
    'b': '-bottom',
    'l': '-left'
};

const modules = [
    series({
        property: 'font-size',
        className: 'f',
        values: [
            '1rem',
            '2rem',
            '3rem',
            '4rem',
        ],
        isResponsive: true,
    }),
    series({
        property: 'line-height',
        className: 'lh',
        values: [
            '1',
            '2',
            '3',
            '4',
        ],
        isResponsive: true,
    }),
    single({
        className: 'error',
        props: {
            color: 'red',
            'font-weight': 'bold',
        },
        isResponsive: true,
    }),
    spacing({
        marginValues: spacingScale,
        paddingValues: spacingScale,
        isResponsive: true,
    }),
    customModule(),
    position(),
    zIndex({
        values: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            999: 999,
            9999: 9999,
            max: 2147483647,
            initial: 'initial',
            inherit: 'inherit',
            unset: 'unset',
        }
    }),
    float(),
    clear(),
    display({
        whitelist: [
            'd:n',
            'd:b',
            'd:f',
            'd:if',
            'd:i',
            'd:ib',
            'd:tb',
        ]
    }),
    visibility(),
    overflow(),
];

const plugins = [
    prefix({ prefix: 'x-' }),
];

module.exports = {
    config: {
        breakPointSeparator: '-',
        seriesSeparator: '',
        variantSeparator: '',
        breakPoints,
    },
    modules,
    plugins,
};