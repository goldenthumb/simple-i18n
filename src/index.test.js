import SimpleI18n from '../src';
const toJson = require('@goldenthumb/simple-i18n-csv-to-json');

test('basic', () => {
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

  expect(i18n.message('hello')).toBe('hello.');

  i18n.switchLang('ja');
  expect(i18n.message('bye')).toBe('さようなら。');

  i18n.switchLang('ko');
  expect(i18n.message('hello')).toBe('안녕하세요.');
  expect(i18n.message('bye')).toBe('goodbye.');
});

test('using by with SimpleI18n', async () => {
  const messages = await toJson('./sample.csv');
  const i18n = new SimpleI18n({
    defaultLocale: ['en'],
    locale: 'en',
    messages
  });

  expect(i18n.message('yes')).toBe('Yes');
  i18n.switchLang('ja');
  expect(i18n.message('no')).toBe('いいえ');
});