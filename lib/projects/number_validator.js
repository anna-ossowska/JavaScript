/* eslint-disable no-useless-escape */
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
// The following are examples of valid formats for US numbers(refer to the tests below for other variants):

// For this challenge you will be presented with a string such as 800 - 692 - 7753 or 8oo - six427676; laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided above.
// The area code is required. If the country code is provided, you must confirm that the country code is 1.
// Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  let regex = /^(1)?([\s])?(\(\d{3}\)|\d{3})([\s\-]?\d{3}[\s\-]?)\d{4}$/;
  let result = regex.test(str);
  return result;
}

console.log(telephoneCheck("555-555-5555")); // should return a boolean.
console.log(telephoneCheck("1 555-555-5555")); // should return true.
console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
console.log(telephoneCheck("5555555555")); // should return true.
console.log(telephoneCheck("555-555-5555")); // should return true.
console.log(telephoneCheck("(555)555-5555")); // should return true.
console.log(telephoneCheck("1(555)555-5555")); // should return true.
console.log(telephoneCheck("555-5555")); // should return false.
console.log(telephoneCheck("5555555")); // should return false.
console.log(telephoneCheck("1 555)555-5555")); // should return false.
console.log(telephoneCheck("123**&!!asdf#")); // should return false.
console.log(telephoneCheck("55555555")); // should return false.
console.log(telephoneCheck("(6054756961)")); // should return false
console.log(telephoneCheck("2 (757) 622-7382")); // should return false.
console.log(telephoneCheck("0 (757) 622-7382")); // should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); // should return false
console.log(telephoneCheck("2 757 622-7382")); // should return false.
console.log(telephoneCheck("10 (757) 622-7382")); // should return false.
console.log(telephoneCheck("27576227382")); // should return false.
console.log(telephoneCheck("(275)76227382")); // should return false.
console.log(telephoneCheck("2(757)6227382")); // should return false.
console.log(telephoneCheck("2(757)622-7382")); // should return false.
console.log(telephoneCheck("555)-555-5555")); // should return false.
console.log(telephoneCheck("(555-555-5555")); // should return false.
console.log(telephoneCheck("(555)5(55?)-5555")); // should return false.

