В HTML-документе есть тег <label> и тег <input> с идентификатором target. 
Необходимо написать скрипт, который присваивает тегу <label> атрибут, позволяющий привязать его к тегу <input>. 
В результате при клике мышью на <label> тег <input> должен стать активным (в него должен переместиться курсор).


let itemLabel = document.querySelector(".label");
let itemInput = document.getElementById("target");

itemLabel.setAttribute("for", "target");
