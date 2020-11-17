// ES5:
// var SpaceShuttle = function(targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus);


//ES6:
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

const zeus = new SpaceShuttle('Jupiter');
console.log(zeus);
console.log(typeof zeus);