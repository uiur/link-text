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
  const actual = link('foo https://twitter.com/ bar', {
    target: '_blank'
  })

  t.ok(actual === 'foo <a href="https://twitter.com/" target="_blank">https://twitter.com/</a> bar')
  t.end()
})

test('with uri encoded tags', (t) => {
  const actual = link('http://hacktheplanet/?p=%3Ciframe%20src=%22/etc/passwd%22%3E%3C/iframe%3E%20PWONED')
  t.ok(actual === '<a href=\"http://hacktheplanet/?p=%3Ciframe%20src=%22/etc/passwd%22%3E%3C/iframe%3E%20PWONED\">http://hacktheplanet/?p=&lt;iframe src=&quot;/etc/passwd&quot;&gt;&lt;/iframe&gt; PWONED</a>')
  t.end()
})
