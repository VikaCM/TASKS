/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

/// --------------- My Option ---------------

// Function Declaration ->
// их можно вызвать до объявления.  поднимается (hoisted). Ii putem modifica si ulterior valorile.

firstFunction(10, 10);

function firstFunction(a, b) {
  // return a + b;
  console.log(a + b);
}

// Function Expression ->
// то такой вызов не работает. Не поднимается (hoisted). Nu putem modifica si ulterior valorile.
secondFunction(5, 5);

const secondFunction = function (a, b) {
  // return a + b;
  console.log(a + b);
};

// В отличие от объявлений Function Declaration, которые создаются заранее, до выполнения кода, объявления Function Expression создают функцию, когда до них доходит выполнение. Благодаря этому свойству Function Expression можно (и даже нужно) использовать для условного объявления функции.

//   ----------- INSTRUCTOR OPTION ------------ //
// Este la fel
