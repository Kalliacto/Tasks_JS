В HTML-документе заданы теги <p>. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.

Пример заданного HTML-документа:
<p>Delete<p>
<p>Абзац<p>
<p>Delete<p>

Пример результата:
<p>Абзац<p>

//-----------------------------------------------
let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
	if (paragraphs[i].textContent == 'Delete') {
		paragraphs.remove();
}

}
