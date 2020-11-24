// Write a joinDogFraternity function that takes a candidate parameter and, using
// the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  return (candidate.constructor === Dog) ? true : false;
}

let hound = new Dog("Mixon");
console.log(joinDogFraternity(hound));