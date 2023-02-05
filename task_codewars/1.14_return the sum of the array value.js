
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
//---------------------------------------------------
function sumMix(x){
let result = x.reduce((a, b) => Number(a) + Number(b));

  return result;
}
sumMix(x);
//---------------------------------------------------
function sumMix(x){
  let result = 0;
      x.forEach(function(element) {
      result += +element;
    });
  return result;
}
sumMix(x);
