'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));

var SimpleI18n =
/*#__PURE__*/
function () {
  function SimpleI18n(_ref) {
    var _ref$fallbackLocales = _ref.fallbackLocales,
        fallbackLocales = _ref$fallbackLocales === void 0 ? ['en'] : _ref$fallbackLocales,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? 'en' : _ref$locale,
        messages = _ref.messages;
    this._fallbackLocales = fallbackLocales;
    this._locale = locale;
    this._messages = _extends({}, messages);
  }

  var _proto = SimpleI18n.prototype;

  _proto.getLocale = function getLocale() {
    return this._locale;
  };

  _proto.setLocale = function setLocale(locale) {
    this._locale = locale;
  };

  _proto.all = function all() {
    return _extends({}, this._messages);
  };

  _proto.messages = function messages(locale) {
    if (locale === void 0) {
      locale = this._locale;
    }

    return _extends({}, this._messages[locale]);
  };

  _proto.message = function message(key, templates) {
    if (templates === void 0) {
      templates = {};
    }

    var message = this._findMessage(key);

    if (!message) return key;

    for (var _i = 0, _Object$entries = Object.entries(templates); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
          _key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
      message = message.split("{{" + _key + "}}").join(value);
    }

    return message;
  };

  _proto._findMessage = function _findMessage(key) {
    for (var _i2 = 0, _arr = [this._locale].concat(this._fallbackLocales); _i2 < _arr.length; _i2++) {
      var fallback = _arr[_i2];

      if (hasOwn(this._messages[fallback], key)) {
        return this._messages[fallback][key];
      }
    }

    return undefined;
  };

  return SimpleI18n;
}();

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = SimpleI18n;
