An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. 

var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('');
};

//-------------------------------------------------------

var isAnagram = function(test, original) {
    if(test.length != original.length) return false;
  
    let str = test.toLowerCase().split('').sort();
    let str2 = original.toLowerCase().split('').sort();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] ===  str2[i]) {
            result = true;
        } else {
            return result = false;
        }
    }

    return result
};
