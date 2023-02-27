В HTML-документе есть тег <button> с идентификатором clicker. Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором clicker. 
При нажатии на кнопку число внутри тега <button> должно увеличиваться на один.

<html>
<head>
</head>
<body>
 <section class="card">
	<button id="clicker">0</button>
 </section>
</body>
</html>

//----------------------------------------------
let clicker = document.getElementById('clicker');

clicker.addEventListener( 'click', () => {
  clicker.innerHTML = parseInt(clicker.innerHTML) + 1;
})
