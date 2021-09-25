var foo = {
  // changed
  const: function () {},
  var: function () {},

  // not changed
  default: 1,
  [a]: 2,
  foo: 1,
};