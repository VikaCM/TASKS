/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; // expression statement

//  expression
const myObject = {
  //   statement
  x: 10,
  y: true,
};

//  expression
myObject.z = "abc"; // statement

// expression statement
delete myObject.x;

// statement
let newVariable;

// expression statement
newVariable = 30 + 5; // expression

// expression statement
console.log(newVariable);

// statement
if (newVariable > 10) {
  console.log(`${newVariable} больше 10`);
} // expresion
