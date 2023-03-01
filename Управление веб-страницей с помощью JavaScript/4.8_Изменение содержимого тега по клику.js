В HTML-документе есть несколько тегов <p>. Внутри них указаны числа.
Напишите скрипт, который позволяет при нажатии на любой параграф увеличить его содержимое на единицу.

<html>
<head>
</head>
<body>
 <section class="card">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>4</p>
	<p>5</p>
	<p>6</p>
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
p{
	cursor: pointer;
	padding: 10px;
	background-color: #8e44ad;
	color: #ecf0f1;
}

//---------------------------------------------------
let tags = document.querySelectorAll('p');

tags.forEach(el => {
    el.addEventListener('click', function() {
        this.innerText = +this.innerText + 1;
    });
});


//---------------------------------------------------
let card = document.querySelector('.card');

card.addEventListener('click', (e) => {
    if (e.target.tagName !== 'P') return;
    e.target.innerText = +e.target.innerText + 1;
});
