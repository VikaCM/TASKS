/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// --- My Option (nefinalizata)
// let i = 1;
// setInterval(function print() {
//   console.log("Сообщение номер " + i);
//   i++;
// }, 2000);
// clearInterval()

// --- Instructor Option
let i = 1;
const messageIntervalId = setInterval(() => {
  console.log("Сообщение номер " + i);
  i = i + 1;
}, 2000);

setTimeout(() => clearInterval(messageIntervalId), 11000);

// --------------- My documentation -------------
// const timerId = setTimeout(() => {
//   console.log("Прошла секунда");
// }, 3000); // permite executarea unei functii dupa o anumita perioada de timp, odata

// clearTimeout(timerId); // intrerupe afisarea

// const intervalId = setInterval(function () {
//   console.log("Я выполняюсь каждую секунду");
// }, 1000); // afiseaza rezultatul in intervalul indicat

// clearInterval(intervalId); // opreste afisarea continua
