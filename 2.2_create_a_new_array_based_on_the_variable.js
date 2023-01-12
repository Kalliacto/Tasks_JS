let regexp= /\d\d\D\D$/;
let newArr = [];

function newArray(value) {
  	for (let item of partNumbers) {
    		if (regexp.test(item )) {
			newArr.push(item);
  		}
	}
	console.log(newArr);
}
newArray(partNumbers);

//Или вариант через метод filter
 
let regexp= /\d\d\D\D$/;
const resultArr2 = partNumbers.filter(item => regexp.test(item));
console.log(resultArr2);
