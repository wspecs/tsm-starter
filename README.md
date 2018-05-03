# guitarics-verse-parser

![npm](https://img.shields.io/npm/v/guitarics-verse-parser.svg) ![license](https://img.shields.io/npm/l/guitarics-verse-parser.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/guitarics-verse-parser.svg)



![nodei.co](https://nodei.co/npm/guitarics-verse-parser.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/guitarics-verse-parser.svg)
![stars](https://img.shields.io/github/stars/wspecs/guitarics-verse-parser.svg)
![forks](https://img.shields.io/github/forks/wspecs/guitarics-verse-parser.svg)

![forks](https://img.shields.io/github/forks/wspecs/guitarics-verse-parser.svg)

![](https://david-dm.org/wspecs/guitarics-verse-parser/status.svg)
![](https://david-dm.org/wspecs/guitarics-verse-parser/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
const parser = require('guitarics verse parse');

const text = `
C       Dm     G7     C
Here goes the best Chords.
`;

parser = new parser.VerseParser(text);
parser.flatten();
console.log(parser.getText());
// B       Dbm     Gb7     B
// Here goes the best Chords.

```

## Install

`npm install --save guitarics-verse-parser`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[guitarics-chordify](https://www.npmjs.com/package/guitarics-chordify) | ^0.2.1 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com/wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT