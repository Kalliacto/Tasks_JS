let word = "Доход";

word = word.toLowerCase();
let result = '';

for(let i = 0; i < word.length; i++) {
    result += word[word.length - 1 - i];
    
}
if (word === result) {
    console.log('Палиндром');
} else {
console.log('Не палиндром');
}

// ----------------------Обратный цикл--------------

let word = "Заяц";
word = word.toLowerCase();
let result = '';


for(let i = word.length - 1; i >= 0; i--) {
    result += newWord[i];
}
if (word === result) {
    console.log('Палиндром');
} else {
console.log('Не палиндром');
}

// --------------------Короткое красивое, но самое ресурсно затратное решение----------------
const newStr = newWord.split('').reverse().join('')
console.log('newStr', newStr)

// --------------------Наиболее оптимальное----------------
let word = "Заяц";
word = word.toLowerCase();
const strLength = Math.floor(word.length / 2);

for (let i = 0; i <= strLength; i++) {
 if (word[i] !== word[word.length - 1 - i]) {
    console.log('Слово не является палиндромом!')
    break
   }
  console.log(i , i === strLength, strLength)
   if (i === strLength) {
    console.log('Слово является палиндромом!')
  }
 }
