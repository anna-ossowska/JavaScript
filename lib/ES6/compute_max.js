// Use the spread operator to compute the maximum value in an array.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

console.log(maximus);

// Another way:
// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN.
// const maximus = Math.max.apply(null, arr);

