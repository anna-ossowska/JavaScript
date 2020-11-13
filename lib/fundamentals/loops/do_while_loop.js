// Notes: Do..while loop ensures that the code inside the loop will run at least once.

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray,
// and i will be equal to 11 when your code has finished running.

var myArray = [];
var i = 10;

// while (i < 5) {
//   myArray.push(i);
//   i++;
// }

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(myArray);