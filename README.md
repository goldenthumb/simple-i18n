# simple-i18n
[![npm](https://img.shields.io/npm/v/@goldenthumb/simple-i18n.svg)](https://www.npmjs.com/package/@goldenthumb/simple-i18n)

<br />
<br />

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

<br />
<br />

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
```js
const i18n = new SimpleI18n({
  fallbackLocales: ['ko'],
  locale: 'ko',
  messages: {
    ['ko']: {
      product: '이것은 {{money}}원 이고, {{size}}개 들어있습니다.'
    }
  }
});

i18n.message('product', { money: 500, size: 2 })
> '이것은 500원 이고, 2개 들어있습니다.'
```
<br />
<br />

## Using by with @goldenthumb/simple-i18n-csv-to-json
[@goldenthumb/simple-i18n-csv-to-json](https://github.com/goldenthumb/simple-i18n-csv-to-json)
### sample csv
![example excel](https://raw.githubusercontent.com/goldenthumb/simple-i18n-csv-to-json/master/sample.png) <br>
,ko,en,ja,zh_CN,zh_TW <br>
yes,예,Yes,はい,是的,是的 <br>
no,아니오,No,いいえ,没有,沒有 <br>

```sh
npm install @goldenthumb/simple-i18n @goldenthumb/simple-i18n-csv-to-json
```

```js
const SimpleI18n = require('@goldenthumb/simple-i18n');
const toJson = require('@goldenthumb/simple-i18n-csv-to-json');

(async () => {
const messages = await toJson(path.resolve(__dirname, './sample.csv'));
  const i18n = new SimpleI18n({
    defaultLocale: ['en'],
    locale: 'en',
    messages
  });

  i18n.message('yes')
  > Yes.

  i18n.switchLang('ja');
  i18n.message('no');
  > いいえ
})();

```

## License
MIT
