export default class SimpleI18n {
    constructor({ fallbackLocales = ['en'], locale = 'en', messages }) {
        this._fallbackLocales = fallbackLocales;
        this._locale = locale;
        this._messages = { ...messages };
    }

    getLocale() {
        return this._locale;
    }

    setLocale(locale) {
        this._locale = locale;
    }

    all() {
        return { ...this._messages };
    }

    messages(locale = this._locale) {
        return { ...this._messages[locale] };
    }

    message(key, templates = {}) {
        let message = this._findMessage(key);
        if (!message) return key;

        for (const [key, value] of Object.entries(templates)) {
            message = message.split(`{{${key}}}`).join(value);
        }
        
        return message;
    }

    _findMessage(key) {
        for (const fallback of [this._locale, ...this._fallbackLocales]) {
            if (hasOwn(this._messages[fallback], key)) {
                return this._messages[fallback][key];
            }
        }

        return undefined;
    }
}

function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}