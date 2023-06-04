/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

// My option
const myArray = ["Vika", "is", 34];
console.log(myArray);
const removed = myArray.splice(1, 2, "24", "is"); // sterge si adauga
console.log(myArray);

// From course option

const myArray = ["Vika", "is", 34];
console.log(myArray);
myArray[1] = 24; // rescrie valoarea
console.log(myArray);
