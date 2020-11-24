// A more efficient way is to set the prototype to a new object that already contains the properties.
// This way, the properties are added all at once.

// Add the property numLegs and the two methods eat() and describe() to the prototype of dog by setting the prototype to a new object.
// Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat: function() {
    return "Eating";
  },
  describe: function() {
    return `This dog's name is ${this.name}`;
  }
};

let hound = new Dog("Mixon");
console.log(hound.eat());
console.log(hound.describe());
console.log(hound instanceof Dog); // true
console.log(hound.constructor === Dog); // true