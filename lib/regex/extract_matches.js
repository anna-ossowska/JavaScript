// (!) Match syntax is the opposit of test syntax:
// 'string'.match(/regex/);
// /regex/.test('string');

// Apply the.match() method to extract the word coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);