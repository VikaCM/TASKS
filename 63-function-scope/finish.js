/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

/// --------------- My Option ---------------

const b = 2;
let d = 15;
// zona de vizibilitate globala
function myFn1(a) {
  let b; // acces la o variabila globala functia inchisa are, nu si invers
  let d = 10; // zona locala de vizibilitate, este limitata de {}
  myFn2(b);
}
function myFn2(a) {
  let c = 5; // zona locala de vizibilitate
  console.log(a, b, c, d); //  -> va afisa 2, 5, 15
}

myFn1();

//   ----------- INSTRUCTOR OPTION ------------ //
// undefined 2 5 15
