В скрипте объявлена переменная values, которая содержит массив из строк. В HTML-верстке есть два тега <div> с классами div1 и div2. 
Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, значение которого встречается в списке values, переместились в тег с идентификатором div2.

Пример значений:
values = ["велосипед", "ролики", "лыжи"]

Пример заданного HTML-документа:
<div id="div1"><p>велосипед</p><p>лыжи</p><p>скейт</p></div>
<div id="div2"></div>

Пример результата в HTML-документе:
<div id="div1"><p>скейт</p></div>
<div id="div2"><p>велосипед</p><p>лыжи</p></div>

//----------------------------------------
const values = ["велосипед", "ролики", "лыжи"];
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

const children = document.querySelectorAll('p');

for (let i = 0; i < children.length; i++) { 
  if (values.includes(children[i].textContent)) { 
    div2.appendChild(children[i]); 
  } 
}
