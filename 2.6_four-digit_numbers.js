//возвращаем результат есть или нет искомый элемент в []
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

//возвращаем результат есть или нет искомый элемент в [] и сколько таких элементов
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

//find возвращаем искомый элемент
let values = [10, 185, 11200, 980, 4859, 4785];
let result = values.find(item => item > 999 && 10000 > item);

console.log(result);


//findIndex - возвращаем index искомого элемента
let values = [10, 185, 11200, 980, 4859, 4785];
let result = values.findIndex(item => item > 999 && 10000 > item);

console.log(result);
