В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль.
Имена методов добавляться не должны.

let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}

const newStr = (obj) => {
    let newArr = [];
        for (let [key, value] of Object.entries(obj)) {
        if (typeof(value) !== 'function' ) {
            newArr.push([key]);
        }}
    
    newArr = newArr.reduce((prev, current)=> prev.concat(current), []);
    let str = newArr.join(', ');
    
    console.log(str);
}

newStr(employees);
