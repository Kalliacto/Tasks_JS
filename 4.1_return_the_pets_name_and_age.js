В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. 
При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.

const pet_1 = { 
    name: "Шарик", 
    age: 10 
};

const pet_2 = { 
    name: "Жучка", 
    age: 5
};
--------------------------------------------------

function getName () {
    return this.name + ' ' + this.age;
}

pet_1.getName = getName;
pet_2.getName = getName;

console.log(pet_1.getName(), pet_2.getName());
