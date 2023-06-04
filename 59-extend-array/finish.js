/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

/// --------------- My Option ---------------

class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, cur) => acc + cur, 0);
  }
  onlyNumbers() {
    return this.filter((i) => typeof i === "number");
  }
}

const ExtendedArray1 = new ExtendedArray(3, 4, 7, " ", "someText");

console.log(ExtendedArray1.sum());
console.log(ExtendedArray1.onlyNumbers());

ExtendedArray1.forEach((i) => console.log(i));
ExtendedArray1.map((i) => console.log(i));

const ExtendedArray2 = new ExtendedArray(10, 20, true);

console.log(ExtendedArray2.sum()); // 31 - de ce nu 30?
console.log(ExtendedArray2.onlyNumbers());

ExtendedArray2.forEach((i) => console.log(i));
ExtendedArray2.map((i) => console.log(i));

// forEach() — выполняет предоставленную функцию один раз для каждого элемента массива.
// map() — создает новый массив с результатами вызова предоставленной функции для каждого элемента в вызывающем массиве.

//   ----------- INSTRUCTOR OPTION ------------ //

// class ExtendedArray extends Array {
//   sum() {
//     return this.reduce((sum, num) => sum + num, 0);
//   }
//   onlyNumbers() {
//     return this.filter((el) => typeof el === "number");
//   }
// }

// const myExtendedArray = new ExtendedArray(10, 4, 5);
// console.log(myExtendedArray);

// console.log(myExtendedArray.sum());

// const myExtendedArray2 = new ExtendedArray("abc", 5, true, 25);
// console.log(myExtendedArray2.onlyNumbers());

// myExtendedArray2.forEach((el) => console.log(el));

// ------------  Array formatul [] nu are acces la metoda sum si onlyNumbers
// const myArray = [1, 2, 3];
// myArray.sum;
