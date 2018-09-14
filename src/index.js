const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

class SimpleI18n {
  constructor({ defaultLocale = ['en'], locale = 'en', messages }) {
    this._defaultLocale = defaultLocale;
    this._locale = locale;
    this._messages = { ...messages };
  }

  get locale() {
    return this._locale;
  }

  switchLang(locale) {
    this._locale = locale;
    return this;
  }

  message(key) {
    const fallbacks = [this._locale, ...this._defaultLocale];

    for (const fallback of fallbacks) {
      if (hasOwn(this._messages[fallback], key)){
        return this._messages[fallback][key]
      }
    }

    return key;
  }

  messages() {
    return { ...this._messages[this._locale] };
  }

  all() {
    return { ...this._messages };
  }
}

export default SimpleI18n;