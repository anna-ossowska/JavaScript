// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
// You should not use the built -in filter method.
// The Array instance can be accessed in the myFilter method using this.

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  this.forEach(element => {
    // same as (callback(element) === true)
    if (callback(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);