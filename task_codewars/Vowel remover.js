Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
    return string.replace(/[aeiou]/g, '');
}
//--------------------------------------------------
function shortcut(string) {
    return string
    .split('')
    .filter(str => !'aeiou'.includes(str))
    .join('')
}
