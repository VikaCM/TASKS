/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

//my Option
const currentTime = Date.now();
console.log(currentTime);

// Instructor option
const currentDate1 = new Date();
console.log(currentDate1);

const currentTimeInMs1 = currentDate1.getTime();
console.log(currentTimeInMs1);
