В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. У него есть атрибут style с указанными высотой и шириной в 100 пикселей. 
Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.
<html>
<head>
</head>
<body>
 <section class="card">
	<div id="square" style="width: 100px; height: 100px;"></div>
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

#square{
	background-color: #c0392b;
}

//-------------------Без динамики-----------------------------
let square = document.getElementById('square');

square.addEventListener('click', () => {
  square.style.width ='90px';
  square.style.height = '90px';
});

//--------------------С----------------------------
let square = document.getElementById('square');

square.addEventListener("click", (event) => {
  let target = event.target;
  const width = target.style.width;
  const height  = target.style.height;
  // Или вместо 2х переменных применить деструкторизацию const { width, height } = target.style;
  
  target.style.height = `${parseFloat(height) * 0.9}px`;
  target.style.width = `${parseFloat(width) * 0.9}px`;
});
