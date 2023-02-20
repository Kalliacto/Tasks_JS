В HTML-документе задан тег <div> с идентификатором div_elem. Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.

const divElement = document.getElementById('div_elem');
divElement.style.width = "100px";
divElement.style.height = "100px";
