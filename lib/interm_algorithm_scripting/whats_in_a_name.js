/* eslint-disable no-prototype-builtins */
// Make a function that looks through an array of objects(first argument)
// and returns an array of all objects that have matching name and value pairs(second argument).
// Each name and value pair of the source object has to be present
// in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
// o.hasOwnProperty(prop) && o[prop] === value)
  var keys = Object.keys(source);
  
  return collection.filter((obj) => {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
}

console.log(whatIsInAName([{ "orange": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1, "bat": 2 }));
