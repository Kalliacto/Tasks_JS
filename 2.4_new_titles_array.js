let tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
];
//Решение
 let titles = [];
 for (let i = 0; i < tasks.length; i++) {
 titles.push(tasks[i].title);
 }
 console.log(titles);
