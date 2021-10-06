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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhIiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidG1wIiwiYXJyIiwiaW5jbHVkZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZpbmFsbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxDQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBVjtBQUNBQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDaEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsQ0FGRDs7QUFHQSxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLE1BQU1DLEdBQUcsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBWjs7QUFDQSxNQUFJQSxHQUFHLENBQUNDLFFBQUosQ0FBYSxDQUFiLENBQUosRUFBcUI7QUFDbkJKLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGLENBTEQ7O0FBTUFJLE9BQU8sQ0FBQ0MsT0FBUixHQUFrQkMsT0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhID0gWzEsIDIsIDNdO1xuYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBjb25zb2xlLmxvZyhpdGVtKVxufSlcbmNvbnN0IHRtcCA9ICgpID0+IHtcbiAgY29uc3QgYXJyID0gWzEsIDIsIDMsIDRdXG4gIGlmIChhcnIuaW5jbHVkZXMoMSkpIHtcbiAgICBjb25zb2xlLmxvZyhcIuWHveaVsFwiKVxuICB9XG59XG5Qcm9taXNlLnJlc29sdmUoKS5maW5hbGx5KCk7Il19
//# sourceMappingURL=index.js.map