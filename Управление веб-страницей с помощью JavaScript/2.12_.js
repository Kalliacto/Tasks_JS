Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов и записывает его в объект tags, как в примере. 
Выведите сформированный объект в консоль.

Пример заданного HTML-документа:
<p>100</p>
<p>200</p>
<div>50</div>
<h2></h2>
<h2>40</h2>

Пример результата:
{"div": 1, "p": 2, "h2": 2}

//------------------------------------------
let div = document.querySelectorAll('div');
let p = document.querySelectorAll('p');
let h2 = document.querySelectorAll('h2');

class Obj {
    constructor(div, p, h2) {
       this.div = div,
       this.p = p,
       this.h2 = h2
    }
}

let result = new Obj(div.length, p.length, h2.length);

console.log(result);
