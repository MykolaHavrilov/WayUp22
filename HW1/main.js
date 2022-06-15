/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
let townName = 'Poltava';
let country = 'Ukraine';
let population = 276200;
let stadium = true;
let result1 = `${townName} ${country} ${population} ${stadium}`;
let exercise1 = 'Задание 1';
console.log(exercise1);
console.log(result1);

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

const a = 40;
const b = 70;
let result2 = (a * b) + 'см';
let exercise2 = 'Задание 2';
console.log(exercise2);
console.log(result2);

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

const time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
let distanceTown = (time * speedOfFirst) + (time * speedOfSecond);
let result3 = 'Відстань між містами ' + distanceTown + 'км';
let exercise3 = 'Задание 3';
console.log(exercise3);
console.log(result3);

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

let exercise4 = 'Задание 4';
console.log(exercise4);

const randomNumber = Math.floor(Math.random() * 100);
let result4 = randomNumber;
console.log(result4);
if (randomNumber < '20') {
    console.log("randomNumber меньше 20");
} else if (randomNumber > '50') {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");  
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

let exercise5 = 'Задание 5';
console.log(exercise5);

const randomNumber2 = Math.floor(Math.random() * 100);
let result5 = randomNumber2;
console.log(result5);

switch (result5) {
    case (result5<20) && result5:
        console.log('randomNumber меньше 20');
        break;
    case (result5>50) && result5:
        console.log('randomNumber больше 50');
        break;
    default:
        console.log('randomNumber больше 20, и меньше 50');
}

