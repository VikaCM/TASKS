/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

/// --------------- My Option ---------------

function square(a) {
  console.log(a * a);
  if (arguments.length < 1) {
    console.error("Функция ${square} не может быть вызвана без аргумента");
  }
}

square(10);
// 100

square();
// ДО: NaN  -> -- se afiseaza NaN, pentru ca undefined nu este numar
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

//   ----------- INSTRUCTOR OPTION ------------ //

function square(a) {
  // // OPTION 1
  if (a === undefined) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }

  // // OPTION 2
  if (arguments.length === 0) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }
  console.log(a * a);
}

square(10);
// 100

square();
