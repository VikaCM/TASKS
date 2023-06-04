/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return "Массив не пустой";
  }
  if (inputArray.length <= 0) {
    return "Массив пустой";
  }
} // if este mai citabil si nu trebuie sa verifici toate conditiile codului, citesti doar conditia de mijloc
console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// ---- тернарный оператор
const isArrayEmpty = function (inputArray) {
  return inputArray.length > 0 ? "Массив не пустой" : "Массив пустой";
};    // nu este nevoie de 'const'
console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// --functia prin sageata
const isArrayEmpty = (inputArray) => {
  if (inputArray.length > 0) {
    return "Массив не пустой";
  } else {
    return "Массив пустой";
  }
};
console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// -------- Instructor option -------------
function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return "Массив не пустой";
  } // daca prima conditie este falsa se trece deodata la conditia 2 si nu mai este nevoide alte coditii
  return "Массив пустой";
}
console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

//---- тернарный оператор
function isArrayEmpty(inputArray) {
  return inputArray.length > 0 ? "Массив не пустой" : "Массив пустой";
}
console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// // --functia prin sageata (el foloseste operatorul ternar). Return - intoarce rezultatul implicit
const isArrayEmpty = (inputArray) => {
  return inputArray.length > 0 ? "Массив не пустой" : "Массив пустой";
};
console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
