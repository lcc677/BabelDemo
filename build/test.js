System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      define(["core-js/modules/es7.array.includes.js", "core-js/modules/es7.promise.finally.js", "core-js/modules/es6.object.to-string.js", "core-js/modules/es6.promise.js"], function (_es7ArrayIncludes, _es7PromiseFinally, _es6ObjectToString, _es6Promise) {
        "use strict";

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

        Promise.resolve()["finally"]();
      });
    }
  };
});
