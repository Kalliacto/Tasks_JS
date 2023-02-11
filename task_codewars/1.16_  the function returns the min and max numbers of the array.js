let arr = [1, 2, 3, 4, 5];

// let min = Math.min( ...arr);
// let max = Math.max( ...arr);

// let newArr = [min, max];
// console.log(newArr);

----------------------------------------
// function newArrCreate(array) {
//     let max = array[0];
//     let min = array[0];
    
//     for (let elem of array) {
//          if(elem > max) {
//             max = elem;
//          }else if (elem < min) {
//              min = elem;
//          }
// }
//     return [min, max];;
// }
----------------------------------------
// function newArrCreate(array) {
//     let max = array[0];
//     let min = array[0];
    
//     array.forEach(elem => {
//         if (elem > max) max = elem;
//         if (elem < min) min = elem;
//     })
//     return [min, max];
// }

newArrCreate(arr)
