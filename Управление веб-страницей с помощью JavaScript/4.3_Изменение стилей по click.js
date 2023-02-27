В HTML-документе задан тег <div> c идентификатором square. Он представляет собой синий квадрат.
Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

<html>
<head>
</head>
<body>
 <section class="card">
	<div id="square"></div>
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
	background-color: #2980b9;
	width: 100px;
	height: 100px;
	display: inline-block;
}

//-----------------------------------------------
let square = document.getElementById('square');
let opacity = 

square.addEventListener('click', () => {
  // square.style.cssText = `opacity: 0; `;
   // Или
  square.style.opacity = '0';
});
