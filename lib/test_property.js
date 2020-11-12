// Create the function checkObj to test if an object passed to the function (obj) contains a specific property(checkProp).
// If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  var result = Object.prototype.hasOwnProperty.call(obj, checkProp);
  if (result === true) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

var test = { gift: "chocolate", pet: "kitten"};
console.log(checkObj(test, "pet"));

// Notes: Always use Object.prototype.hasOwnProperty.call(myObj, prop) instead of myObj.hasOwnProperty(prop)
// https://eslint.org/docs/rules/no-prototype-builtins