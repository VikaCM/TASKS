import sumNumbers from "./moduleOne.mjs";
const res1 = sumNumbers(10, 2);
console.log(res1);
//------Exportarea a citorva variabile concrete--------
// import { one, two } from "./moduleOne.mjs";

// console.log(one);
// console.log(two);
//------Exportarea variabilelor care trebui de modificat denumirea --------
// import { one as oneRenamed, two } from "./moduleOne.mjs";

// console.log(oneRenamed);
// console.log(two);

//-----Importarea se face toata in susul codului

import { sum, mult as multNumbers, divid } from "./moduleOne.mjs";

console.log(sum(10, 2));
console.log(multNumbers(10, 2));
console.log(divid(10, 2));
