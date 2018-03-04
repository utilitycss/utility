const defineClass = require('./src/util/defineClass');
const {
    plugins: {
        prefix,
    },
    modules: {
      single,
      series,
      spacing,
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
        autoClassName: 'a',
        margin: {
            enabled: true,
            auto: true,
            variants: directions,
            className: 'm',
            values: spacingScale,
            isResponsive: true,
        },
        padding: {
            enabled: true,
            auto: true,
            variants: directions,
            className: 'p',
            values: spacingScale,
            isResponsive: true,
        }
    }),

    customModule(),
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