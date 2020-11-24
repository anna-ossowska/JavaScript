// Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}
// We use prototype properties to reduce duplicate code.
// Properties in the prototype are now shared among ALL instances of Dog.
// Think of a prototype as a "recipe" for creating objects.
// Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.
Dog.prototype.numLegs = 4;

let beagle = new Dog("Mixon");
console.log(beagle);

