// Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "orange"
// "c" - "lemon"
// default - "stuff"

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
  case "a":
    answer += "apple";
    break;
  case "b":
    answer += "orange";
    break;
  case "c":
    answer += "lemon";
    break;
  default:
    answer += "stuff";
  }
  return answer;
}

console.log(switchOfStuff("orange"));