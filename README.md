# ember-cli-tinycolor

Simply wraps [tinycolor](https://github.com/bgrins/TinyColor) into Ember, allowing you to do a wide range of color tests, conversions and transformations, such as:
```
tinycolor("#fff").isDark();  // false
tinycolor("#fff").isLight(); // true
tinycolor("#f00").lighten().toString(); // "#ff3333"
tinycolor("#f00").brighten().toString(); // "#ff1919"
tinycolor("#f00").darken().toString(); // "#cc0000"
tinycolor("#f00").desaturate().toString(); // "#f20d0d"
tinycolor("hsl(0, 10%, 50%)").saturate().toString(); // "hsl(0, 20%, 50%)"
tinycolor("#f00").greyscale().toString(); // "#808080"
```
... and many others - check out the [tinycolor README](https://github.com/bgrins/TinyColor) for more.

Big thanks to [Brian Grinstead](https://github.com/bgrins) for TinyColor!

## Installation
```
ember install ember-cli-tinycolor
```

## Usage
Simply `import tinycolor from 'tinycolor';` in any controller/service/component/route etc as needed.
