В HTML-документе заданы элементы с числовым значением с классом price. Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.

Пример заданного HTML-документа:
<div class='card target'>
  <h1 class='promo'>Всем привет!</h1>
   <p>
    <p class='secret target'>Очень рекомендую купить велосипед всего за <span class='price'>25000</span> рублей.</p>
    <p class='secret target'>Очень рекомендую купить самокат всего за <span class='price'>10000</span> рублей.</p>
    <p class='secret target'>Очень рекомендую купить лыжи всего за <span class='price'>14000</span> рублей.</p>
   </p>
 </div>

Пример результата:
3000


//-----------------------------------
const prices = document.getElementsByClassName("price");

function priceSum(elems) {
  let result = 0;
    for(let i = 0; i < elems.length; i++) {
      let price = (Number(elems[i].textContent));
      result += price;
}
return result;
}

console.log(priceSum(prices));
