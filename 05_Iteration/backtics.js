//=======================
//backtics 
//======================


// ` `   → Template literal
// ${}   → Put variable/expression inside the template literal




// . ` ` → Backticks

// These are called backticks or template literals.

// Example:

let name = "Sasmita";


console.log(`Hello ${name}`);

// Output:

// Hello Sasmita

// The backticks tell JavaScript:

// "This is a template literal, and I may put JavaScript values inside it."


// . ${} → Insert a value

// Inside backticks, ${} allows you to insert a variable or expression.

let age = 25;


console.log(`My age is ${age}`);

// Output:

// My age is 25

// Here:

// ${age}

// means:

// Take the value of age and put it here.














// 1. Normal string → fixed text
// console.log("Hello Sasmita");

// This simply prints:

// Hello Sasmita

// You can also do:

// let name = "Sasmita";


// console.log("Hello Sasmita");

// But notice: "Sasmita" is hard-coded. If name changes, the output doesn't change.

// 2. Backticks → dynamic text
// let name = "Sasmita";


// console.log(`Hello ${name}`);

// Output:

// Hello Sasmita

// Now change:

// let name = "Rahul";

// The same console.log() automatically gives:

// Hello Rahul

// That's the main reason we use backticks.