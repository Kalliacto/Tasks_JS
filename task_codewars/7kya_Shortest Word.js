Simple, given a string of words, return the length of the shortest word(s).

  function findShort(s) {
  let arr = s.split(' ');
  let num = 9999;
  
  arr.forEach((el) => {
    num > el.length ? num = el.length : num;
  })
  
  return num;
}

