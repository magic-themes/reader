## @magic-themes/reader

reader mode for [@magic](https://github.com/magic/core).

used on [explain.webboot](https://explain.webboot.org)

[demo](https://magic.github.io/reader)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-themes/reader.svg
[npm-url]: https://www.npmjs.com/package/@magic-themes/reader
[travis-image]: https://img.shields.io/travis/com/magic-themes/reader/master
[travis-url]: https://travis-ci.com/magic-themes/reader
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/reader/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicthemes/reader/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-themes/reader/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-themes/reader
[greenkeeper-image]: https://badges.greenkeeper.io/magic-themes/reader.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-themes/reader.svg
[snyk-image]: https://snyk.io/test/github/magic-themes/reader/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-themes/reader

#### install:
```bash
npm install --save --save-exact @magic-themes/reader
```

#### usage:

##### declare usage:
```javascript
// config.mjs:

module.exports = {
  //... other config
  THEME: 'reader',

  // multiple themes
  // we recommend using the @magic-themes/project as a base for the reader theme.
  // THEME: ['project', 'reader']
}
```

@magic will then import and use the theme automagically.

##### overwrite

you can overwrite any style in this theme with your own.

create /assets/themes/reader/index.mjs, any css there will overwrite the theme css

```javascript
export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
})
```

#### changelog

##### 0.0.1
first release

##### 0.0.2
remove max height from pages. pages are as big as they have to be, this is not a pdf, fortunately :)

##### 0.0.3
remove dependence on @magic-themes/project, add Logo and state to theme.

##### 0.0.4
* remove max height from pages on all screen sizes
* Header now is centered both when menu is closed and when it is open

##### 0.0.5
bump required node version to 14.2.0

##### 0.0.6
* bug: lightswitch and cookie btn where invisible.
* update dependencies


##### 0.0.7
bump required node version to 14.15.4

##### 0.0.8 - unreleased
...
