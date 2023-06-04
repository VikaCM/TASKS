/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3];

// Напишите код здесь

/// --------------- My Option ---------------

function copySorted(a) {
  return a.slice();
}

const b = copySorted(a);

//   ----------- INSTRUCTOR OPTION ------------ //

// Option 1
// const b = [...a];

// Option 2
// const b = Array.from(a);

// Option 3 - prin JSON facem copie masivului
// const b = JSON.parse(JSON.stringify(a));

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
