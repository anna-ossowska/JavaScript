/* eslint-disable no-prototype-builtins */
// Add the own properties of canary to the array ownProps.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  // if (Object.prototype.hasOwnProperty.call(canary, property))
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);