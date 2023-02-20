В HTML-документе задан тег <select> c идентификатором numbers. 
Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10. 
Значение у тега <option> должно быть указано внутри и в атрибуте value.

let itemSelect = document.getElementById("numbers");

for (let i = 10; i <= 550; i += 10) {
let itemOption = document.createElement('option');
  itemOption.innerText += i;
  itemOption.value = i;
  itemSelect.append(itemOption);
}
