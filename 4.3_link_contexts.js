В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

Пример значений переменных:
pet = { 
    name: "Диксон", 
    breed: "Немецкая овчарка" 
}

function getDescription() { 
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}

Пример результата:
Имя питомца: Диксон, Порода: Немецкая овчарка

// -----------------------------------------
getDescription = getDescription.bind(pet);
getDescription();
     // Имя питомца: Диксон, Порода: Немецкая овчарка


