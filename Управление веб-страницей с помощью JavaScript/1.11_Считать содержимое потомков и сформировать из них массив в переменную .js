В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.

Пример заданного HTML-документа:
<ul id="cars">
<li>Tesla</li>
<li>Opel</li>
</ul>

Пример результата:
["Tesla',"Opel"]
 
 //----------------------
let content = document.querySelector('.cars');
let car = content.children;
const cars = [];

for (let i = 0; i < car.length; i++) {
    cars.push(car[i].textContent)
}
console.log(cars);
