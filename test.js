const link = require('./')
const test = require('ava')

test('returns linked text', (t) => {
  const text = link('foo bar http://google.com/')
  const linkRegExp =
    /<a href="http:\/\/google.com\/">http:\/\/google\.com\/<\/a>/

  t.ok(linkRegExp.test(text))
  t.end()
})

test('html tags', (t) => {
  t.ok(link('<marquee>') === '&lt;marquee&gt;')
  t.end()
})

test('unicode', (t) => {
  const actual = link('god https://ja.wikipedia.org/wiki/%E7%A5%9E')

  t.ok(actual === 'god <a href="https://ja.wikipedia.org/wiki/%E7%A5%9E">https://ja.wikipedia.org/wiki/神</a>')
  t.end()
})

test('with attributes', (t) => {
  const actual = link('foo http://twitter.com/ bar', {
    target: '_blank'
  })

  t.ok(actual, 'foo <a href="https://twitter.com/" target="_blank">https://twitter.com/</a> bar')
  t.end()
})
