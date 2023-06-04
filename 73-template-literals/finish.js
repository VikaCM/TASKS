/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 },
];

// Создайте функцию "carInfo" здесь

/// --------------- My Option ---------------

function carInfo(car) {
  return ` Цена автомобиля ${car.brand} - ${car.price}$ и это ${
    car.price >= 20000 ? "дорогая" : "дешёвая"
  } машина`;
}

//   ----------- INSTRUCTOR OPTION ------------ //
// Prescurtat prin destructurizare:

function carInfo({ brand, price }) {
  return ` Цена автомобиля ${brand} - ${price}$ и это ${
    price >= 20000 ? "дорогая" : "дешёвая"
  } машина`;
}

cars.forEach((car) => console.log(carInfo(car)));
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
