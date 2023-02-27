В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points и c элементами <li> внутри.
Напишите скрипт, который позволяет удалить последний элемент <li> в списке <ul> при нажатии на кнопку.

<html>
<head>
</head>
<body>
 <section class="card">
	<button id="delete">Delete</button>
	<ul id="points">
		<li>Пункт 1</li>
		<li>Пункт 2</li>
		<li>Пункт 3</li>
		<li>Пункт 4</li>
		<li>Пункт 5</li>
		<li>Пункт 6</li>
	</ul>
 </section>
</body>
</html>


//-------------------------------------------------
const btnDelete = document.getElementById('delete');
const list = document.querySelectorAll("#points li");

btnDelete.addEventListener('click', () => {
  list[list.length  -1].remove();
});


//-----------Не совсем корректно--------------------------------------
const btnDelete = document.getElementById('delete');
const list = document.querySelector("#points");

btnDelete.addEventListener('click', () => {
  list.removeChild(list.lastChild);
});
