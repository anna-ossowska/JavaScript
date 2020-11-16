var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}


console.log(i);
// returns 3
// With the var keyword, i is declared globally.
// So when i++ is executed, it updates the global variable.

console.log(printNumTwo());
// returns 3 not 2
// This is because the value assigned to i was updated and the printNumTwo() returns the global i
// and not the value i it had when the function was created in the for loop.

