/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// Напишите код здесь

/// --------------- My Option ---------------

for (let i = 0; i < str.length; i++)
  if (vowels.includes(str[i].toLowerCase())) {
    vowelsCount++;
  }

//   ----------- INSTRUCTOR OPTION ------------ //

// Option 1: Convertarea in masiv.  split este metoda care converteste stroka in masiv

// str.split("").forEach((simbol) => {
//   if (vowels.includes(simbol)) {
//     vowelsCount += 1;
//   }
// });

// Option 2

// for (const simbol of str)
//   if (vowels.includes(simbol)) {
//     vowelsCount += 1;
//   }

// console.log(vowelsCount);
// 9
