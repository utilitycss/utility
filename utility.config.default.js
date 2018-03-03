const breakPoints = {
    ns: 'screen and (min-width: 30em)',
    m: 'screen and (min-width: 30em) and (max-width: 60em)',
    l: 'screen and (min-width: 60em)',
};

const fontSize = {
    type: 'series',
    property: 'font-size',
    className: 'f',
    values: [
        '1rem',
        '2rem',
        '3rem',
        '4rem',
    ],
    isResponsive: true,
};

const lineHeight = {
    type: 'series',
    property: 'line-height',
    className: 'lh',
    values: [
        '1',
        '2',
        '3',
        '4',
    ],
    isResponsive: true,
};

const error = {
    className: 'error',
    props: {
        color: 'red',
        'font-weight': 'bold',
    },
    isResponsive: true,
}

const modules = [fontSize, lineHeight, error]
    .map(module => Object.assign({}, module, { breakPoints }));

module.exports = {
    config: {
        prefix: '',
        breakPointSeparator: '-',
        seriesSeparator: '',
    },
    modules,
};