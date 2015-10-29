# link-text

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/link-text.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/link-text
[travis-image]: https://img.shields.io/travis/uiureo/link-text.svg?style=flat-square
[travis-url]: https://travis-ci.org/uiureo/link-text

## Install

```
npm install link-text
```

## Usage

```js
var link = require('link-text')

link('foobar https://google.com')
//=> 'foobar <a href="https://google.com">https://google.com</a>'
```

## License

[ISC](LICENSE)
