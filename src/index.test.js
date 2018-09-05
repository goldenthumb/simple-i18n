import SimpleI18n from '../dist';

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