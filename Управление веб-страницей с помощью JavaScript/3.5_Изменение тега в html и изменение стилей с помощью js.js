В HTML-документе есть тег <div> с идентификатором photo. Внутри этого тега указана ссылка на картинку. 
Необходимо написать скрипт, который:

- заменит ссылку на тег <img> с этой картинкой
- укажет размеры картинки в атрибуте style 100 на 100 пикселей

<html>
<head>
</head>
<body>
 <section class="card">
	<div id="photo">https://i.pinimg.com/564x/36/a1/91/36a19108f3088af7315231dc919b166a.jpg</div>
 </section>
</body>
</html>

//----------------------------------------
let itemDiv = document.getElementById("photo");
itemDiv.innerHTML = `<img src='${itemDiv.innerHTML}'>`;

let imgElem = itemDiv.firstChild;

imgElem.style.width = "100px";
imgElem.style.height = "100px";
