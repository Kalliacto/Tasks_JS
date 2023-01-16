let values = [10, 185, 11200, 980];
let result = false;
function findFourDidgit(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 999 && 10000 > arr[i]) {
        result = true;
        } 
    }console.log(result);
}
findFourDidgit(values);


let values = [10,1154, 185,1154, 11200, 980,1154];
let result = false;
let countResult = 0;
function findFourDidgit(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 999 && 10000 > arr[i]) {
        result = true;
        countResult++;
        } 
    }console.log(result, countResult);
}
findFourDidgit(values);
