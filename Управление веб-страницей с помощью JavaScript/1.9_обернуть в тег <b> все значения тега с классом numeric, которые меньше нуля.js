В HTML-документе заданы теги с числовым значением с классом numeric. Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.


Пример заданного HTML-документа:
<div class="card">
  <h1>Всем привет!</h1>
   <div class="content">
    <p>Удачи в решении задачи!</p>
    <p class="numeric">15</p>
    <p class="numeric">25</p>
   </div>
   <p class="numeric">-5</p>
 </div>

Пример результата:
<p class="numeric">62</p>
<p class="numeric"><b>-12</b></p>
<p class="numeric">16</p>

//---------------------------------------
const numbers = document.getElementsByClassName("numeric");

function numberInB(numbers){
    for(let i = 0; i < numbers.length; i++) {
      let number = (Number(numbers[i].textContent));
      if (number >= 0 ) {
         continue;
      } else {
        numbers[i].innerHTML = "<b>"+numbers[i].innerText+"</b>";
      }
}
return numbers;
}

numberInB(numbers);
