// const sum = (a, b) => a + b;

// export default sum;

//------Exportarea a citorva variabile concrete--------
// const one = 1;
// const two = "two";

// export { one, two };
//------Exportarea variabilelor care trebui de modificat denumirea --------
// const one = 1;
// const two = "two";

// export { one, two };

//-----Expotarea se face toata in josul codului------

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const divid = (a, b) => a / b;

export { sum, mult };
export default divid;
