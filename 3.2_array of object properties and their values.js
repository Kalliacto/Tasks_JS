Пример значений переменных:

goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}
Пример результата:

["title, "price", "good_id", "Самокат", 6000, 1]


let key = Object.keys(goods);
let values = Object.values(goods);

let newGoods = key.concat(values);

console.log(newGoods);
