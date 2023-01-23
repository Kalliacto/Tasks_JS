Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  let newStr = str.split(' ');

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].split('').reverse().join('');
      console.log(newStr[i]);
    }

  return newStr.join(' ');
}
reverseWords(str);
// ---------------------------------------
let str = "elbuod  secaps";
function reverseWords(str) {
let result = [];
  
  str.split(" ").forEach((element) => {
    result.push(element.split("").reverse().join(""));
  })
  
  return result.join(" ");
}
reverseWords(str);
