/* eslint-disable no-prototype-builtins */
// Modify the code to show the correct prototype chain.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true

// Fix the code below so that it evaluates to true
// ???.isPrototypeOf(Dog.prototype);
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
