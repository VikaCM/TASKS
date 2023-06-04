/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const aboutMy = {
  name: "Vika",
  surname: "Cirlan",
  favoriteNumber: 7,
};
const aboutMy1 = `My name is  ${aboutMy.name} ${aboutMy.surname}, and my favorite number is ${aboutMy.favoriteNumber}.`;

console.log(aboutMy1);
