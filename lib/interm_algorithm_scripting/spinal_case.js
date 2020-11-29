/* eslint-disable no-useless-escape */
// Convert a string to spinal case.Spinal case is all - lowercase - words - joined - by - dashes.

function spinalCase(str) {
  return str
    .replace(/([A-Z])/g, " $1").toLowerCase()
    .replace(/[\_\-]/g, " ")
    .replace(/\s\s+/g, " ")
    .trim()
    .split(' ')
    .join('-');
}

console.log(spinalCase("This Is Spinal Tap")); // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("TheAndyGriffith_Show")); // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things"