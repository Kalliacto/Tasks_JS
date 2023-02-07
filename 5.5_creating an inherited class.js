В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. 
Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class User extends Permissions {
    constructor(name) {
        super()
       this.name = name;
    }
}
