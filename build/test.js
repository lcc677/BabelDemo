"use strict";

require("core-js/modules/es7.promise.finally.js");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const a = [1, 2, 3];
a.forEach(item => {
  console.log(item);
});
console.log(_jquery.default);
Promise.resolve().finally();
