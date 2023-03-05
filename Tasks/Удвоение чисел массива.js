Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.

Например:
f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

//-----------------------------------------------------
function f(arr) {
	  return arr.filter(item => item !== null).map(item => item * 2);
}

f([1, 2, null, 7, 8, null, 3])
//-----------------------------------------------------

function f(arr) {
	return arr
		.filter(item => item !== null)
		.map(item => item * 2);
}
f([1, 2, null, 7, 8, null, 3])
