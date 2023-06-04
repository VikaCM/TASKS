/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const myName = "Vika";
const suName = "Cirlan";
const myJob = "Manager";

// OPTION 1
const aboutMy = `Ma numesc ` + myName + ` ` + suName + ` si sunt ` + myJob;
console.log(aboutMy);

// OPTION 2
const aboutMy1 = `Ma numesc ${myName} ${suName} si sunt ${myJob}`;
console.log(aboutMy1);
