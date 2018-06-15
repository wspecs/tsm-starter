# tsm-starter



![npm](https://img.shields.io/npm/v/tsm-starter.svg) ![license](https://img.shields.io/npm/l/tsm-starter.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/tsm-starter.svg)

![nodei.co](https://nodei.co/npm/tsm-starter.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/tsm-starter.svg)
![stars](https://img.shields.io/github/stars/wspecs/tsm-starter.svg)
![forks](https://img.shields.io/github/forks/wspecs/tsm-starter.svg)

![forks](https://img.shields.io/github/forks/wspecs/tsm-starter.svg)

![](https://david-dm.org/wspecs/tsm-starter/status.svg)
![](https://david-dm.org/wspecs/tsm-starter/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
// cat ~/.tsm-starter.json
// {
//   "author": {
//     "name": "Author Name",
//     "email": "author@email.com",
//     "url": "author.url.co"
//   },
//   "repository": "wspecs"
// }

const starter = require('tsm-starer');
starter.generate({
  name: 'new-module',
  config: '~/.tsm-starter.json',
  destination: '~/dest'
});

// Or as binary
tsm-starer new-module --config=~/.tsm-starter.json destination=~/dest

```

## Install

`npm install --save tsm-starter`

Or as binary

``npm install --g tsm-starter`

## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[commander](https://www.npmjs.com/package/commander) | ^2.15.1 | ✖
[minimist](https://www.npmjs.com/package/minimist) | ^1.2.0 | ✖
[replace](https://www.npmjs.com/package/replace) | ^1.0.0 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.2 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

[Wendly Saintil](https://twitter.com/wendlysaintil)

## License

[MIT](LICENSE)
