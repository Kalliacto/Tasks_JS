В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

Пример значений переменных:
array = [true, 4, "word", "10n"]

Пример результата:
Количество элементов в массиве: 4

//----------------------------------

let array = [true, 4, "word", "10n"];

function count(arr) {
	let countElem = array.length;

    return  "Количество элементов в массиве: " + countElem ;
}

count(array);

//----------------------------------
let array = [true, 4, "word", "10n"];

function count(arr) {
	let countElem = 0;

 	for (let i = 0; i < arr.length;i++) {
        countElem++;
    }

    return  "Количество элементов в массиве: " + countElem ;
}

count(array);   //'Количество элементов в массиве: 4'


//----------------------------------

function count(array){
	let countElem = 0;

 	array.forEach(function (element) {
        if (array) {
            countElem++;
		}
    	});

return  `Количество элементов в массиве: ${countElem}` ;
}

count(array);   //'Количество элементов в массиве: 4'
