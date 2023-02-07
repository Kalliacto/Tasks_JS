В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом.
Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num.
Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.

Пример значений переменных:
array = [2, 4, 7, 8, 1]
num = 2

Пример результата:
3

const array = [2, 4, 7, 8, 1];
const num = 2;


const findMinSum = (numsCount, ...arr) => {
  const array = arr[0];
  let nums = new Array(numsCount).fill(Infinity);

  array.forEach(num => {
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] <= num) continue;

      nums.splice(i, 0, num);
      nums.pop();
      break;
    }
  });

  nums = nums.map(x => x === Infinity ? 0 : x);

  const sum = nums.reduce((a, b) => a + b, 0);

  return sum;
}


console.log(findMinSum(num, array));
