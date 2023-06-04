/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ["London", "New York", "Singapore"];

// myCities.forEach((i, arr) => {
//   console.log(i + " is at the index " + arr + " in the " + myCities);
// }); // functie prin sageata (insa este anonima)

/// ----- Rezolvare ----
const cityInfo = (i, arr) =>
  i + " is at the index " + arr + " in the " + myCities;

myCities.forEach((i, arr) => console.log(cityInfo(i, arr)));
