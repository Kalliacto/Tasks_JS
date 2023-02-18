Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

//----------------------------------------
const arr = [1, 2, 3];
console.log(arr.reverse());

//----------------------------------------
const reverseArr = (array) => {
  const reversed = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    reversed.push(array[i]);
  }

  return reversed;
};

reverseArr(arr);
