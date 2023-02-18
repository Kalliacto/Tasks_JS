Метод concat () используется для объединения двух, или более массивов в один, при этом он не изменяет существующие массивы, а возвращает новый массив.

Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arr = ['a', 'b', 'c'];
let arr2 =  [1, 2, 3];

console.log(arr.concat(arr2));

//---------------------------------------------
function concatArr(arr, arr2) {
    let newArr = arr;
    for(let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
    return newArr;
}

concatArr(arr, arr2);
