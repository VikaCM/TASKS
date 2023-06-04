/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

// option 1 (functie simpla)
function helloWorld() {
  console.log("Привет, мир!");
}
setTimeout(helloWorld, 2000);

//Используйте стрелочную функцию

// option 2 (anonima si fara variabila)

setTimeout(() => console.log("Salut lume!"), 3000);

// option 3
const helloWorld1 = () => console.log("Hi World!");
setTimeout(helloWorld1, 5000);
