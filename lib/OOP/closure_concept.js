// Change how weight is declared in the Bird function so it is a private variable.
// Then, create a method getWeight that returns the value of weight 15.

function Bird() {
  // private variable
  let weight = 15;
  // getWeight() is the inner function, a closure
  // it uses a variable declared in the parent function
  // a cosure gives you access to the outer function's scope
  // In JS, closures are created every time a function is created
  this.getWeight = function() {
    return weight;
  };
}

let birdy = new Bird();
console.log(birdy.getWeight());
