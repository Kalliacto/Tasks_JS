В HTML-документе задан тег <button> с классом copy. 
Напишите скрипт, который позволит при нажатии на кнопку <button> создать ее копию и расположить в конце тега body.

<html>
<head>
</head>
<body>
 <section class="card">
	<button class="copy">Everything's a copy of a copy of a copy</button>
 </section>
</body>
</html>

body {
	background-color: #6f9e80;
	margin: 0;
	font-family: sans-serif;
}

.card{
	padding: 10px;
	margin: 10px;
	display: inline-block;
	background-color: #95a5a6;
}

//------------------------------------------
let btnCopy = document.querySelector(".copy");

btnCopy.addEventListener('click', () => {
  let new_element = btnCopy.cloneNode();
  new_element.innerHTML =  btnCopy.innerHTML;

  document.body.appendChild(new_element);
});
