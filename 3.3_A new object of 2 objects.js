Пример значений переменных:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
}
author = {
    name: "Ричард М.В.",
    age: 43
}

Пример результата:

article = {
    title: "Загадки дачного огурца", 
    text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
    name: "Ричард М.В.",
    age: 43
}



let newObj = Object.assign(article,author);
console.log(newObj );
