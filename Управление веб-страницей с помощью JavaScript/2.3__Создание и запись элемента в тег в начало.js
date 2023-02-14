В HTML-документе задан тег <ul> c элементами <li> внутри. Напишите скрипт, который создает новый элемент <li> с текстовым содержимым Велосипед в переменной 
new_element и добавляет его в начало списка <ul>.


Пример заданного HTML-документа:
<ul><li>Самокат</li></ul>

Пример результата:
<ul><li>Велосипед</li><li>Самокат</li></ul>

//----------------------------------------
let new_element = document.createElement("li");
new_element.innerHTML = "Велосипед";
let elemTitle = document.querySelector("ul");
let cap = elemTitle.querySelector("li");
elemTitle.insertBefore(new_element, cap);
