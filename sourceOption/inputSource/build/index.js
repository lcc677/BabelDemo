"use strict";

require("core-js/modules/es7.array.includes.js");

require("core-js/modules/es7.promise.finally.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

var a = [1, 2, 3];
a.forEach(function (item) {
  console.log(item);
});

var tmp = function tmp() {
  var arr = [1, 2, 3, 4];

  if (arr.includes(1)) {
    console.log("函数");
  }
};

Promise.resolve().finally();