/* eslint-disable no-prototype-builtins */
// Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle));