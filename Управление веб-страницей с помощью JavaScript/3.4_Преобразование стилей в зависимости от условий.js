В HTML-документе есть тег <p> c идентификатором rainbow. Внутри этого тега указано число. Реализуйте скрипт, который делает преобразование в зависимости
от следующих условий:
Если числовое значение находится в диапазоне от 1 до 9 включительно, должно меняться значение атрибута style. Цвет текста — на красный (#c0392b).
Если числовое значение находится в диапазоне от 10 до 20 включительно — на коричневый (#e17055).
В ином случае — на желтый (#fdcb6e).


let itemP = document.getElementById("rainbow");
let num = Math.floor(itemP.textContent);

function colorСhange (num) {
	if( 1 >= num && num <= 9) {
	itemP.style.color = '#c0392b';
	}else if(10 >= num && num <= 20) {
	itemP.style.color = '#e17055';
	}else {
	itemP.style.color = '#fdcb6e';
	}
}

colorСhange (num);
