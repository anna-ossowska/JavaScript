// A common pattern in JavaScript is to execute a function as soon as it is declared.
// This pattern is known as an immediately invoked function expression or IIFE
// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression.

// function makeNest() {
//   console.log("A cozy nest is ready");
// }
// makeNest();

(function() {
  console.log("A cozy nest is ready");
})();
