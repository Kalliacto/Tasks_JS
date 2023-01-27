let numbers = [23,4,2,4,3,11,3,12,3,23];
let result = 0;

const checkElemet = numbers.reduce(function(prev,curv){
    if(prev + curv <= 50) {
        result++;
    }
    return prev = prev + curv;
}, 0);
checkElemet;

console.log(result);


// В разложенном виде reduce
function checkSumElement(array) {
    let count = 0;
    let sumElement = 0;

    
    for(i = 0; i < array.length;i++) {
        if (sumElement + array[i] <= 50) {
            sumElement += array[i];
            count++;
        }
    }
    return count;
}
checkSumElement(numbers);
