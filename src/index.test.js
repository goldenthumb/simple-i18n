import path from 'path';
import SimpleI18n from '../src';
const toJson = require('@goldenthumb/simple-i18n-csv-to-json');

test('basic', () => {
    const i18n = new SimpleI18n({
        fallbackLocales: ['en'],
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
                hello: 'こんにちは。'
            }
        }
    });

    expect(i18n.message('hello')).toBe('hello.');

    i18n.setLocale('ja');

    expect(i18n.message('bye')).toBe('goodbye.');

    i18n.setLocale('ko');

    expect(i18n.message('hello')).toBe('안녕하세요.');
    expect(i18n.message('bye')).toBe('goodbye.');
});

test('using by with SimpleI18n', async () => {
    const messages = await toJson(path.resolve(__dirname, './sample.csv'));
    const i18n = new SimpleI18n({
        fallbackLocales: ['en'],
        locale: 'en',
        messages
    });

    expect(i18n.message('yes')).toBe('Yes');
    i18n.setLocale('ja');
    expect(i18n.message('no')).toBe('いいえ');
});

test('using template', () => {
    const i18n = new SimpleI18n({
        fallbackLocales: ['ko'],
        locale: 'ko',
        messages: {
            ['ko']: {
                product: '이것은 {{money}}원 이고, {{size}}개 들어있습니다.'
            }
        }
    });

    expect(i18n.message('product', { money: 500, size: 2 })).toBe('이것은 500원 이고, 2개 들어있습니다.');
});