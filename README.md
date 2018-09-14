# simple-i18n
[![npm](https://img.shields.io/npm/v/@goldenthumb/simple-i18n.svg)](https://www.npmjs.com/package/@goldenthumb/simple-i18n)

## Install
```sh
npm install @goldenthumb/simple-i18n
```
```js
//es6
import SimpleI18n from '@goldenthumb/simple-i18n';

//commonjs
const SimpleI18n = require('@goldenthumb/simple-i18n');
```

## Example
```js
const i18n = new SimpleI18n({
  defaultLocale: ['en'],
  locale: 'en',
  messages: {
    ['ko']: {
      hello: '안녕하세요.'
    },
    ['en']: {
      hello: 'hello.',
      bye: 'goodbye.'
    },
    ['ja']: {
      hello: 'こんにちは。',
      bye: 'さようなら。'
    }
  }
});

i18n.message('hello')
> hello.

i18n.switchLang('ja');
i18n.message('bye');
> さようなら。

i18n.switchLang('ko');
i18n.message('hello');
i18n.message('bye')
> 안녕하세요.
> goodbye.
```

## License
MIT
