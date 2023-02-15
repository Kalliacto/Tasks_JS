В HTML-документе есть тег <ul> с идентификатором tasks, и внутри него есть несколько тегов <li> с текстом.
Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.

Пример заданного HTML-документа:
<ul id="tasks">
<li>Велосипед</li><li>Скейт</li><li>Самокат</li>
</ul>

Пример результата:
<ul id="tasks">
<li>Скейт</li><li>Самокат</li><li>Велосипед</li>
</ul>

//------------------------------------------
let list = document.getElementById("tasks"); 
let items = list.getElementsByTagName("li"); 
let itemsArray = []; 

for (let i = 0; i < items.length; i++) { 
  //Записали в массив пустой текстовое значение li
  itemsArray.push(items[i].textContent); 
} 
//Отсортировали полученный массив
itemsArray.sort(function(a, b) { 
  return a.length - b.length; 
}); 

list.innerHTML = ""; 
//Перебрав массив записали в list строки из массива
for (let i = 0; i < itemsArray.length; i++) { 
  list.innerHTML += "<li>" + itemsArray[i] + "</li>"; 
}
