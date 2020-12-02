// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.

function rot13(str) {
  // create an array out of the alphabet letters
  let alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  // create an array out of the input string
  let inputArr = str.split('');

  let findIndex = [];
  let convertIndex = [];
  let convertLetter = [];

  // search for an index of each input letter inside the alphabet array
  // skip search for any non-letter items
  inputArr.forEach((item) => {
    if (alphabetArr.indexOf(item) === -1) {
      findIndex.push(item);
    } else {
      findIndex.push(alphabetArr.indexOf(item));
    }
  });

  // shift indexes by 13
  // make sure you modify the numbers only
  // 26 is the number of letters inside the alphabet
  findIndex.forEach((item) => {
    if (Number.isInteger(item) && item + 13 < 26) {
      convertIndex.push(item + 13);
    } else if (Number.isInteger(item) && item + 13 > 26) {
      convertIndex.push((item + 13) % 26);
    } else if (Number.isInteger(item) && item === 13) { // special condition for A letter
      convertIndex.push(0);
    } else {
      convertIndex.push(item);
    }
  });

  // convert each number to its alphabetic counterpart
  convertIndex.forEach((item) => {
    if (Number.isInteger(item)) {
      convertLetter.push(alphabetArr[item]);
    } else {
      convertLetter.push(item);
    }
  });
  return convertLetter.join('');
}

console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE ?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.