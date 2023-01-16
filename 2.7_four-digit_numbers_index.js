let values = [10,185, 11200, 980,1154];
let result = false;
function findFourDidgit(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 999 && 10000 > arr[i]) {
        result = arr.indexOf(arr[i]);
        } else {
        result = "Искомый элемент не был найден";
        }
    }console.log(result);
}
findFourDidgit(values);
