Напишите скрипт, который создает новый элемент <p> в переменной new_element и добавляет его в тег с идентификатором root.
Созданный тег <p> должен содержать в себе фразу Ура! Мой скрипт отработал верно!

Пример результата:
<div id="root">
<p>Ура! Мой скрипт отработал верно!</p>
</div>

//-----------------------------------
let elemRoot = document.getElementById("root");
let new_element = document.createElement("p");
new_element.innerHTML = "Ура! Мой скрипт отработал верно!";
elemRoot.appendChild(new_element);
