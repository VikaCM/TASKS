/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */


const myObject = {
  key1: true,
  key5: 10,
  key3: "abc",
  key4: null,
  key10: NaN,
};
for (const key in myObject) {
  console.log(key, ":" + myObject[key]); /// NU ESTE VERIFICAT KEY5, 4, 10.  TREBUIE DE FOLOSIT if
} // ----> my option1

 Object.keys(myObject).forEach((key) => console.log(key, ":", myObject[key])); // ------> my option2 (este metoda veche??)

if ((key = myObject.key1)) {
  console.log(key);
}
if ((key = myObject.key3)) {
  console.log(key);
}

// ------------ Instructor option ---------------

const objectKeys = Object.keys(myObject);
objectKeys.forEach((key) => {
  if (key === "key1" || key === "key3") {
    console.log(myObject[key]);
  }
});
