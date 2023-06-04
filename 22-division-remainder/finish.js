/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

console.log(myNumber1 % myNumber2); // 1

/** Prioritatea operatorului % - 13 (ma nmare ca la + sau - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
 * Ассоциативность % слева направо
 */

console.log(((70 % 30) % 10) % 3); // se aplica la identificarea elementelor din lista
