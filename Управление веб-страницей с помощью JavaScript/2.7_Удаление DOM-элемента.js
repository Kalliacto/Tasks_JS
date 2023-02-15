В скрипте объявлен массив values, который состоит из чисел. В HTML-документе есть множество тегов <p> с классом elems. Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values.

Пример значений:
values = [10, 50, 100]
Пример заданного HTML-документа:
<p class=”elems”>50</p>
<p class=”elems”>20</p>
<p class=”elems”>10</p>

Пример результата в HTML-документе:
<p class=”elems”>20</p>

//---------------------------------------------
const values=[15, 20, 25];
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
	if ((values.includes(Number(paragraphs[i].textContent))) !== "false"){
        paragraphs.remove();
    }
}
