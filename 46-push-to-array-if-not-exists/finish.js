/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

//nu trebuie json. find

const pushIfUnique = (inputArray, newElement) => {
  const found = inputArray.find((item) => {
    if (item === newElement) {
      return true;
    } else {
      return false;
    }
  });
  if (found) {
    console.log(`${newElement} уже находится в массиве`);
  }
  if (!found) {
    inputArray.push(newElement);
  }
};


//   ----------- INSTRUCTOR OPTION ------------ //

const pushIfUnique = (inputArray, newElement) => {
  if (inputArray.includes(newElement)) {
    return console.log(`${newElement} уже находится в массиве`)
  }
  inputArray.push(newElement)
}

const myNumbers = [123, 50, 27];

pushIfUnique(myNumbers, 50); // "50 уже в массиве"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 уже в массиве"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]
