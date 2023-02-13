Исправьте скрипт таким образом, чтобы в результате его работы в переменной result была сумма значений тегов с классом numeric.

Пример заданного HTML-документа:
<p class="numeric">62</p>
<p class="numeric">-12</p>
<p class="numeric">16</p>

Пример результата:
result = 66

//--------------------------------
let result = 0;
let elems = document.getElementsByClassName("numeric");

for (let i = 0; i < elems.length; i++) {
    let elem = Number(elems[i].textContent);
    result += elem;
}

console.log(result);
