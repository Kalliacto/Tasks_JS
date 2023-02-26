В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно.
Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

Пример значений переменных:

firstName = "Александр"
lastName = "Петров"
Пример результата:

user.fullName // "Александр Петров"
user.fullName = "Всеволод Старозубов"
user.firstName // "Всеволод"
user.lastName // "Старозубов"

//----------------------------------------------
let user = {
    firstName,
    lastName,

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
    
  set fullName(value) {
    return this.array = value;
    } 
}


//----------------------------------------------
let user = {
    firstName,
    lastName,

get fullName() {
    return this.firstName + ' ' + this.lastName;
},
    
set fullName(value) {
    // value = 'Иван Иванов';
    const arr = value.split(' '); // [Иван, Иванов]
    this.firstName = arr[0];
    this.lastName = arr[1];
    } 
}
