В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.

Пример заданного HTML-документа:
<div id=”div1”><h2>Text</h2><span>subtext</span></div>
<div id=”div2”><h1>Title</h1></div>

Пример результата в HTML-документе:
<div id=”div1”></div>
<div id=”div2”><h1>Title</h1><h2>Text</h2><span>subtext</span></div>
  
 //---------------------------------------------------
let divOne = document.getElementById('div1');
let divTwo = document.getElementById('div2');
let title = divOne.firstElementChild;
let paragraph = divOne.lastElementChild;

divTwo.append(title, paragraph);
