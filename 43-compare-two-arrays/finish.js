/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

// // -- REZOLVARE 1 -------
function areArraysEqual(firstArray, secondArray) {
  if (firstArray.length != secondArray.length) return false; // Мас­си­вы раз­ной дли­ны не рав­ны

  for (
    i = 0;
    i < firstArray.length;
    i++ // Цикл по всем эле­мен­там
  )
    if (firstArray[i] !== secondArray[i]) return false; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны

  return true; // Ина­че они рав­ны
}

const a = [1, 2, 3];
const b = [1, 2, 3];

// console.log(a === b); // false (Почему?) => deoarece masivele sunt obiecte care au linkuri si se compara linkurile, dar nu continutul lor.

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false

// // // ------- REZOLVARE 2 ---- corecta ---

const areArraysEqual = (firstArray, secondArray) =>
  firstArray.length === secondArray.length &&
  firstArray.every((value, index) => value === secondArray[index]);
// =>  сравнения каждого элемента массива с элементами другого массива

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false (Почему?)

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false

/// ---------------- My documentation ----------------
// https://www.techiedelight.com/ru/compare-arrays-javascript/
// https://behemothoz.gitbooks.io/js-learn/content/array/sravnenie-massivov.html

//   ----------- INSTRUCTOR OPTION -------- //

const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true;
  }
  return false;
};

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false (Почему?)

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false
