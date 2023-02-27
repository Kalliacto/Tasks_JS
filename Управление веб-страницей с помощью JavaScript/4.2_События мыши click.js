В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val. 
Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.

<html>
<head>
</head>
<body>
 <section class="card">
	<input value="Все работает!" id="val">
	<button id="btn">Жмак!</button>
 </section>
</body>
</html>

//------------------------------
let btn = document.getElementById('btn');
let input = document.getElementById('val');

btn.addEventListener('click', () => {
  console.log(input.value);
});
