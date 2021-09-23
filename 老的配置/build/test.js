"use strict";

require("core-js/modules/es7.promise.finally.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = [1, 2, 3];
a.forEach(function (item) {
  console.log(item);
});
console.log(_jquery.default);
Promise.resolve().finally();
