/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
// ------- My Option ------

const cars = [];
cars[0] = {
  carBrand: "BMW",
  price: 35000,
  isAvailableForSale: true,
};
cars[1] = {
  carBrand: "Mercedes",
  price: 20000,
  isAvailableForSale: true,
};
cars[2] = {
  carBrand: "Ferrary",
  price: 95000,
  isAvailableForSale: false,
};
cars[3] = {
  carBrand: "Lada",
  price: 2000,
  isAvailableForSale: true,
  year: 1990,
};
console.log(cars); // GRESIT!!!

// -- My Documentation ---- https://otus.ru/nest/post/1301/
// var arrObjects = []; // объявляем массив

// arrObjects[0] = {
//     id: "1",
//     name: "firstArrElement"
// }
// arrObjects[1] = {
//     id: "2",
//     name: "secondArrElement"
// }

// ---- Instructor option ---

const cars = [
  {
    carBrand: "BMW",
    price: 35000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Mercedes",
    price: 20000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Ferrary",
    price: 95000,
    isAvailableForSale: false,
  },
];
const newCar = {
  carBrand: "Lada",
  price: 2000,
  isAvailableForSale: true,
  year: 1990,
};
cars.push(newCar);
console.log(cars);
