# Tasks_JS
## Базовые строковые функции
- palindrome Задача на палиндром
- 1.1 В программе задана переменная message со строковым значением. Определите наличие подстроки привет в начале строки переменной message. Если данное условие выполняется, выведите в консоль булевое значение true, в ином случае — false. Сравнение должно быть без учета регистра. Правильный ответ выведите в консоль.
- 1.2 В программе задана переменная greetings со строковым значением. Определите позицию последнего вхождения подстроки username в значении переменной greetings. Результат выведите в консоль.
- 1.3 В программе задана переменная firstDiv со строковым значением. Определите, встречаются ли в данной строке два парных тега <p>. Выведите в консоль булевое значение true, если встречается, и false — в ином случае.
- 1.4 В программе объявлена переменная road со строковым значением, которая задает протяженность дороги. Необходимо из строки убрать подстроку km, оставив только численное значение. Его необходимо конвертировать в мили, округлить до одного знака после запятой, а результат вывести в консоль. Помните, что 1 километр равен 0,62 мили.
- 1.5 В программе задана переменная words со строковым значением. Напишите условный оператор, который выводит в консоль сообщение В строке больше одного слова, если строка содержит больше одного слова, в ином случае в консоль должна выводиться фраза В строке одно слово.
## Сравнение строк
- 1.6 В программе объявлена переменная symbols со строковым значением. В данной строке могут встречаться буквенные символы и цифры. Опишите условие, которое выводит в консоль строку Первый символ цифра, если первый символ переменной symbols является цифрой. В противном случае необходимо вывести строку Первый символ не цифра.
- 1.7 В программе объявлена переменная symbols со строковым значением. Напишите условный оператор, который реализует следующую логику:
Если сумма числовых значений Unicode первых двух символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
В ином случае необходимо вывести сообщение Символ обнаружить не удалось
## Работа с регулярными выражениями
- 1.8 В программе задана переменная phone со строковым значением. В ней хранится номер телефона и, помимо цифр, иные символы. Преобразуйте строку так, чтобы в номере отсутствовали следующие символы: (,/:/*/ ).
- 1.9 В программе задана переменная emails со строковым значением. В ней указано несколько значений электронной почты через пробел. Преобразуйте данное значение в массив так, чтобы каждая почта в строке являлась элементом массива. Результат выведите в консоль.
- 1.10 В программе задана переменная ticket со строковым значением. Напишите условный оператор, который работает по следующей логике:
Если в билете после буквенных символов и тире идут 8 цифр подряд, программа должна вывести в консоль сообщение Выбран билет на концерт
Если в билете после буквенных символов идут 12 цифр подряд, программа должна вывести в консоль сообщение Выбран билет в театр
В противном случае выведите в консоль сообщение Билет не определен
## Методы массивов
- 2.1 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!
- 2.2 В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.
- 2.3  В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.
Пример значений переменных:
layout = `"<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"`.
- 2.4 В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.
Пример значений переменных:
tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]
- 2.5 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.
- 2.6 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.
- 2.7 Необходимо доработать программу из задания 2.6
В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого в консоль. В противном случае выведите сообщение Искомый элемент не был найден.
- 2.8 В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.
- 2.9 В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.
- 2.10 В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом: В начале массива должны быть все числовые значения по возрастанию. В конце все строковые, упорядоченные по алфавиту
#### Методы reverse, split и join
- 2.11 В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.
- 2.12 В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.
- 2.13 В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.
- 2.14 В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
- 2.15 В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.
## Управление веб-страницей с помощью JavaScript
- 1.1 Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.
- 1.2 Напишите скрипт, который определяет тип тега с идентификатором elem и выводит его в консоль.
- 1.3 В HTML-документе есть несколько тегов с классом promo. Напишите скрипт, который определяет количество элементов с данным классом и выводит результат в консоль.
- 1.4 Выведите в консоль название последнего тега, у которого есть класс target.

