/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5;
const b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки -> deoarece nu ridica in sus. Constanta a fost declarata dupa aplicare.
  console.log(c);
  // 17
}

console.log(c); // -> eroarea ramane deoarece variabila c este in zona de vizibilitate locala {}

// Uncaught ReferenceError: c is not defined


//   ----------- INSTRUCTOR OPTION ------------ //

// var si function pot fi gasite de JS si dupa declarera constantelor mai jos -> acestea declara valorile automat in zona globala - NU SE RECOMANDA UTILIZAREA var.