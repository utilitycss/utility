[![Build Status](https://travis-ci.com/utilitycss/utility.svg?branch=master)](https://travis-ci.com/utilitycss/atomic)

# UtilityCSS

## Installation

```
$ yarn install @utilitycss/utility
```

## Usage

### Simple Default setting

This will use the default options for the plugins which is configured [here](./src/utility.config.default.js).

In `main.css`

```css
@utility;
```

In `postcss.config.js`

```js
const utility = require("@utilitycss/utility");
module.exports = {
  plugins: [utility()]
};
```

### Simple Default setting

In `main.css`

```css
@utility;
```

In `postcss.config.js`

```js
const utility = require("@utilitycss/utility");
module.exports = {
  plugins: [utility()]
};
```

## PostCSS Options

| option  | description                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| config  | `<Object>` with the follow `[key]:<value>` breakPointSeparator: "", seriesSeparator: "", pseudoClassesSeparator: "", breakPoints: undefined |
| modules | List of modules in [here](./src/modules/index.js).                                                                                          |
| plugins | List of modules in [here](./src/plugins/index.js).                                                                                          |

## Supported Modules

1.  single
1.  series
1.  backgroundImage
1.  border
1.  spacing
1.  position
1.  zIndex
1.  float
1.  clear
1.  colors
1.  display
1.  visibility
1.  opacity
1.  outline
1.  overflow
1.  resize
1.  cursor
1.  boxSizing
1.  width
1.  height
1.  flexbox
1.  font
1.  verticalAlign
1.  textAlign
1.  textDecoration
1.  textTransform
1.  transform
1.  transition
