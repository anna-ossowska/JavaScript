// The eat method is repeated in both Cat and Bear.
// Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

Bear.prototype = Object.create(Animal.prototype);
let teddy = new Bear("Teddy");
console.log(teddy.eat());