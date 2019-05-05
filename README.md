# reading-time-emoji [![Build Status](https://travis-ci.org/dutiyesh/reading-time-emoji.svg?branch=master)](https://travis-ci.org/dutiyesh/reading-time-emoji) [![gzip size](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/reading-time-emoji/index.js?compression=gzip)](https://cdn.jsdelivr.net/npm/reading-time-emoji/index.js)

> Format article reading time into emoji


## Install

```
npm install reading-time-emoji
```


## Usage

```js
const formatReadingTime = require('reading-time-emoji');

formatReadingTime(10);
//=> ☕☕ 10 min read

formatReadingTime(50);
//=> 🍱🍱🍱🍱🍱 50 min read

formatReadingTime(10, { short: '🍰', long: '🎂' });
//=> 🍰🍰 10 min read

formatReadingTime(50, { short: '🍰', long: '🎂' });
//=> 🎂🎂🎂🎂🎂 50 min read

```


## API

### formatReadingTime(minutes, [options])

Format article reading time into emoji.

#### minutes

Type: `number`

Accepts an article's reading time in minutes.

#### options

Type: `object`

Default: `{ short: '☕', long: '🍱', base: 5 }`

##### short

Type: `string`

Default: `'☕'`

Represents a unit of emoji equivalent to 5 minutes of reading time.

```js
'☕' emoji = 5 minutes
```

##### long

Type: `string`

Default: `'🍱'`

For long articles with reading time greater than `base`(Default: `5`) units of emoji, `long` unit of emoji is equivalent to 10 minutes of reading time.

```js
'🍱' emoji = 10 minutes
```

##### base

Type: `number`

Default: `5`

A default base value for a unit of emoji.


## Inspiration

Heavily inspired by Dan Abramov's Overreacted blog articles reading time format.


## License

MIT © Dutiyesh Salunkhe
