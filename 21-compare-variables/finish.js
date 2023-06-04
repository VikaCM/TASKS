/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = "5";

// // option 1 - recomandat
// console.log(parseInt("5"));
// console.log(typeof parseInt("5"));

// // option 2
// console.log(+myVariable2);
// console.log(typeof +myVariable2);

// Напишите код здесь
console.log(parseInt(myVariable1) <= parseInt(myVariable2)); // se trasnforma in numar si se cheama in consola deoadata

myVariable1 = "20";
myVariable2 = 100;
// Напишите код здесь

console.log(parseInt(myVariable1) <= parseInt(myVariable2));
