// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let arrLowerCase = arr.map(x => x.toLowerCase());
  let word1 = arrLowerCase[0];
  let word2 = arrLowerCase[1].split('');
  let arrChecked = [];

  for (let i = 0; i < word2.length; i++) {
    while (word1.includes(word2[i])) {
      arrChecked.push(word2[i]);
      i++;
    }
  }
  return arrChecked.length === word2.length;
}
console.log(mutation(["floor", "for"])); // should return true
console.log(mutation(["Mary", "Army"])); // should return true.
console.log(mutation(["hello", "hey"])); // should return false.
console.log(mutation(["hello", "neo"])); // should return false.
console.log(mutation(["voodoo", "no"])); // should return false.
console.log(mutation(["ate", "date"])); // should return false.