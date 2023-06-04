/** ЗАДАЧА 33 - Добавление элемента по определенному индексу
 *
 * 1. Добавить элемент "abc" с индексом 10.
 *
 * 2. Выведите результирующий массив в консоль. Объясните результаты.
 *
 * 3. Какова длина конечного массива?
 */

const myArray = [1, 2];

myArray[10] = "abc";

console.log(myArray);
// <8 empty items> -> sunt elementele lipsa. Masivul este format din 11 elemente, dar 8 sunt undefined.

console.log(myArray.length); 


