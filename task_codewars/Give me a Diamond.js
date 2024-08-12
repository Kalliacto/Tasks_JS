Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n){
  if (n <= 0 || !(n % 2)) {
    return null;
  }

  let midleIndex = Math.floor((n + 1) / 2);
  let j, diam = '';
    for(var i = 1; i <= n; i++) {
        j = i <= midleIndex ? i : n - i + 1;
        diam += ' '.repeat(midleIndex - j) + '*'.repeat(2 * j - 1) + '\n';
    }
    return diam;

}
