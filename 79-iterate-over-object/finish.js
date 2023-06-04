/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

// Создайте функцию здесь

/// --------------- My Option ---------------

function sumObjectValues() {
  let sum = 0;
  for (let key in objectWithNumbers) {
    if (typeof objectWithNumbers[key] === "number") {
      sum += objectWithNumbers[key];
    }
  }
  return sum;
}

//   ----------- INSTRUCTOR OPTION ------------ //
// Prin transformarea obiectului in masiv

// function sumObjectValues(nums) {
//   let sum = 0;

//   Object.keys(nums).forEach((key) => {
//     if (typeof nums[key] === "number") {
//       sum += nums[key];
//     }
//   });
//   return sum;
// }

// const result = sumObjectValues(objectWithNumbers);
// console.log(result);
// //42
