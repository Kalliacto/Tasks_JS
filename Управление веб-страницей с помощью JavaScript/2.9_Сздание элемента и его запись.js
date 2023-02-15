В HTML-документе есть тег <ul> c идентификатором first. Внутри этого тега есть теги <li>. Напишите скрипт, который создает новый тег <li> в переменной new_element и добавляет в элемент <ul> с идентификатором first. После добавления нового элемента выведите в консоль общее количество тегов <li> в теге <ul> с идентификатором first.

Пример заданного HTML-документа:
<ul id="first">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>

//---------------------------------------

let list = document.getElementById('first');
let new_element = document.createElement('li');
new_element.textContent = '4';
list.append(new_element);

console.log(list.childNodes.length / 2);
