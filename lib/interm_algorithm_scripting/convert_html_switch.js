// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let letterArr = str.split('');
  let htmlArr = [];
  for (let i = 0; i < letterArr.length; i++) {
    switch(letterArr[i]) {
    case "&":
      htmlArr.push("&amp;");
      break;
    case "<":
      htmlArr.push("&lt;");
      break;
    case ">":
      htmlArr.push("&gt;");
      break;
    case "\"":
      htmlArr.push("&quot;");
      break;
    case "'":
      htmlArr.push("&apos;");
      break;
    default:
      htmlArr.push(letterArr[i]);
    }
  }
  return htmlArr.join("");
}

console.log(convertHTML("Dolce & Gabbana")); // should return "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return "Hamburgers &lt; Pizza &lt; Tacos"
console.log(convertHTML("Sixty > twelve")); // should return "Sixty &gt; twelve"
console.log(convertHTML('Stuff in "quotation marks"')); // should return "Stuff in &quot;quotation marks&quot;"
console.log(convertHTML("Schindler's List")); // should return "Schindler&apos;s List"
console.log(convertHTML("<>")); // should return "&lt;&gt;"
console.log(convertHTML("abc")); // should return "abc"