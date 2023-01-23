Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string

let x = '45385593107843568';

function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
              result += '0';
        } 
      if (x[i] >= 5) {
            result += '1';
        }
  }
    return result;
}

fakeBin(x);
// ---------------------------------

function fakeBin(x) {
    return x.split('').map(item => item < 5 ? 0 : 1).join('');
}
fakeBin(x);
