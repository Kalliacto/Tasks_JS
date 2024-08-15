Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
009 -> 010

//--------------------------------------------
function incrementString (strng) {
    let numStr = strng.match(/\d+$/);
    let letters = numStr?.index ? strng.slice(0, numStr.index) : strng;

    if(numStr) {
        let [full, zeros, number] = numStr[0].match(/(0{0,})(\d+)$/);
        let result = Number(number) + 1;
        
        if (number.length === String(result).length) {
            return !Number(letters) ? letters + zeros + result : zeros + result;
        } else {
            if(zeros) {
                if (result <= 10) {
                    return zeros.slice(0, -1) + result;
                } return letters + zeros.slice(0, -1) + result;
            } else return letters + result;
        }
    } else {
        return letters + 1
    }
}
//-----------------------------------------------------
function incrementString (strng) {
    let numStr = strng.match(/(0{0,})(\d{0,})$/);

    if (numStr) {
        let [,zeros, number] = numStr;
        let result = Number(number) + 1;

        if (number.length === String(result).length) {
        return strng.slice(0, numStr.index) + zeros + result;
    }
        else {
        return strng.slice(0, numStr.index) + zeros.slice(0, -1) + result;
        }
    }
    else {
    return strng + '1';
    }
}
//------------------------------------------------------
let incrementString = (str) => {
   return str.replace(/([0-8]|\d?9+)?$/, (e) =>  e ? + e + 1 : 1)
}
