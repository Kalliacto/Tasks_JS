В HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val. Напишите скрипт, 
который выводит в консоль содержимое тега <p> при клике на кнопку.

<html>
<head>
</head>
<body>
 <section class="card">
	<p id="val">Все работает!</p>
	<button id="btn">Жмак!</button>
 </section>
</body>
</html>

//-----------------------
let btn = document.getElementById('btn');
let tagP = document.getElementById('val');

btn.addEventListener('click', () => {
  console.log(tagP.textContent);
});
