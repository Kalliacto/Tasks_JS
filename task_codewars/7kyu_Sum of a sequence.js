Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.


function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
//--------------------------------------------------------
function getRealFloor(n) {
  if (n <= 0 ) {
    return n;
  }
  if ( n < 13 ) {
    return n - 1;
  }
  if (n > 13 ) {
    return n - 2;
  }
}
