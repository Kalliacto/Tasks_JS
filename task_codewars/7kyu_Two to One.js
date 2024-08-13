Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  function longest(s1, s2) {
    let newStr = s1 + s2,
        arrLetters = new Set(newStr.split('').sort());

    return Array.from(arrLetters).join('');
}
