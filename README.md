# link-text

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/link-text.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/link-text
[travis-image]: https://img.shields.io/travis/uiureo/link-text.svg?style=flat-square
[travis-url]: https://travis-ci.org/uiureo/link-text

A function to autolink text. It turns text into linked text with anchor tags.

```js
var link = require('link-text')

link('foo https://google.com bar')
//=> 'foo <a href="https://google.com">https://google.com</a> bar'

link('aaa <script>')
//=> 'aaa &lt;script&gt;'

link('https://google.com', { target: '_blank' })
//=> '<a href="https://google.com" target="_blank">https://google.com</a>'

link('https://ja.wikipedia.org/wiki/%E5%AF%BF%E5%8F%B8')
//=> '<a href="https://ja.wikipedia.org/wiki/%E5%AF%BF%E5%8F%B8">https://ja.wikipedia.org/wiki/寿司</a>'
```

## Install

```
npm install link-text
```


## License

[ISC](LICENSE)
