// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax.
// Also, make sure nothing is defined using the keyword var.

// var magic = function () {
//   "use strict";
//   return new Date();
// };

// eslint-disable-next-line no-unused-vars
const magic = () => new Date();