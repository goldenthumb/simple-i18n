var e=function(e){var t=e.fallbackLocales;void 0===t&&(t=["en"]);var s=e.locale;void 0===s&&(s="en");var a=e.messages;this._fallbackLocales=t,this._locale=s,this._messages=Object.assign({},a)};function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.prototype.getLocale=function(){return this._locale},e.prototype.setLocale=function(e){this._locale=e},e.prototype.all=function(){return Object.assign({},this._messages)},e.prototype.messages=function(e){return void 0===e&&(e=this._locale),Object.assign({},this._messages[e])},e.prototype.message=function(e,t){void 0===t&&(t={});var s=this._findMessage(e);if(!s)return e;for(var a=0,o=Object.entries(t);a<o.length;a+=1){var n=o[a],r=(e=n[0],n[1]);s=s.split("{{"+key$1+"}}").join(r)}return s},e.prototype._findMessage=function(e){for(var s=0,a=[this._locale].concat(this._fallbackLocales);s<a.length;s+=1){var o=a[s];if(t(this._messages[o],e))return this._messages[o][e]}};export default e;
//# sourceMappingURL=index.mjs.map
