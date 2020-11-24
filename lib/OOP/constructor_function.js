// Create a constructor, Dog, with properties name, color, and numLegs
// that are set to a string, a string, and a number, respectively.
// Then create a new instance of Dog, assigning it to a variable hound.

function Dog() {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}

let hound = new Dog();
console.log(hound);