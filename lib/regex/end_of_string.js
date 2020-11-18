// Match the string "caboose" at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

console.log(result);