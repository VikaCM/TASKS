/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false); //3
// Operator || (SAU logic) va returna primul operand adevărat sau ultimul operand dacă toți operanzii sunt falși. În acest caz, primul operand 3 este adevărat, deci calculul nu continuă mai departe.

//Operatorul && (ȘI logic) va returna ultimul operand fals sau primul operand fals dacă toți operanzii sunt adevărati. În acest caz, operatorul && va returna null deoarece returnează false, lăsând doar un operand de evaluat cu operatorul ||.

console.log(true && null); // null

console.log(true && "abc" && 10); // 10

console.log(3 || (true && null) || false); // 3
