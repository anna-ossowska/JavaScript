// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function (firstAndLast) {
  var fullName = firstAndLast;

  this.getFullName = function () {
    return fullName;
  };

  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };

  this.getLastName = function () {
    return fullName.split(' ')[1];
  };

  this.setFullName = function (name) {
    return fullName = name;
  };

  this.setFirstName = function (name) {
    return fullName = name + " " + fullName.split(' ')[1];
  };

  this.setLastName = function (name) {
    return fullName = fullName.split(' ')[0] + " " + name;
  };
};

let bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setLastName("Curry"));
console.log(bob.getFirstName());
console.log(bob.getLastName());



