// Write a joinDogFraternity function that takes a candidate parameter and, using
// the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
  this.name = name;
}

// Since the constructor property can be overwritten,
// it’s generally better to use the instanceof method to check the type of an object.
function joinDogFraternity(candidate) {
  return (candidate.constructor === Dog) ? true : false;
}

let hound = new Dog("Mixon");
console.log(joinDogFraternity(hound));