let values = ["100", "30", "Не число", "20", "Тоже не число"];


const calcSumElements = (array) => {
let resultSum = 0;

for (i = 0;i < array.length; i++ ) {
	if (isNaN(array[i]) !== true) {
	resultSum += +array[i];
}
}
return resultSum;
}

calcSumElements(values);


// -------------------------------------------------------------

let values = ["100", "30", "Не число", "20", "Тоже не число"];


const calcSumElements = values.reduce(function(previousValue, currentItem) {
            if (isNaN(currentItem) !== true) {
        	return +previousValue + +currentItem;
            } else {
                return +previousValue;
            }   
}, 0);
calcSumElements;

// -------------------------------------------------------------
let values = ["100", "30", "Не число", "20", "Тоже не число"];


const calcSumElements = values.reduce(function(previousValue, currentItem) {
            if (parseInt(currentItem)) {
        	return previousValue + parseInt(currentItem);
            } else {
                return previousValue;
            }   
}, 0);
calcSumElements;
