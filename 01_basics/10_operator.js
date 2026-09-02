// gave js operators note with example
// JavaScript Operators — Notes with Examples

// Operator = a symbol used to perform an operation on values/variables.

// Example:

// let a = 10;
// let b = 5;

// console.log(a + b); // 15
// 1. Arithmetic Operators

// Used for mathematical calculations.

// Operator	Name	Example	Result
// +	Addition	10 + 5	15
// -	Subtraction	10 - 5	5
// *	Multiplication	10 * 5	50
// /	Division	10 / 5	2
// %	Modulus	10 % 3	1
// **	Exponentiation	2 ** 3	8
// let a = 10;
// let b = 3;

// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.333...
// console.log(a % b);  // 1
// console.log(a ** b); // 1000
// Important: % Modulus

// It gives the remainder.

// console.log(10 % 3); // 1
// console.log(20 % 5); // 0

// Useful for checking even/odd:

// let num = 7;

// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }
// 2. Assignment Operators

// Used to assign or update values.

// =
// let x = 10;

// Means: store 10 inside x.

// Compound Assignment
// let x = 10;

// x += 5;  // x = x + 5
// console.log(x); // 15

// x -= 3;  // x = x - 3
// console.log(x); // 12

// x *= 2;  // x = x * 2
// console.log(x); // 24

// x /= 4;  // x = x / 4
// console.log(x); // 6

// x %= 4;  // x = x % 4
// console.log(x); // 2

// Common operators:

// = 
// +=
// -=
// *=
// /=
// %=
// **=
// 3. Comparison Operators

// Used to compare two values.

// The result is always true or false.

// > Greater than
// console.log(10 > 5); // true
// < Less than
// console.log(10 < 5); // false
// >= Greater than or equal
// console.log(10 >= 10); // true
// <= Less than or equal
// console.log(5 <= 10); // true
// == Loose Equality

// Checks value but not data type.

// console.log(5 == "5"); // true

// Because both represent the value 5.

// === Strict Equality

// Checks value AND data type.

// console.log(5 === "5"); // false

// Because:

// 5     → number
// "5"   → string
// != Not equal
// console.log(5 != 10); // true
// !== Strict not equal
// console.log(5 !== "5"); // true
// ⭐ Interview Important

// Prefer:

// ===
// !==

// instead of:

// ==
// !=

// because strict comparison avoids unexpected type conversion.

// 4. Increment and Decrement Operators

// Used to increase or decrease a value by 1.

// Increment ++
// let x = 5;

// x++;
// console.log(x); // 6

// Same as:

// x = x + 1;
// Decrement --
// let x = 5;

// x--;
// console.log(x); // 4

// Same as:

// x = x - 1;
// 5. Prefix and Postfix

// This is very important for interviews.

// Postfix
// let x = 5;

// console.log(x++); // 5
// console.log(x);   // 6

// First use the value, then increase.

// Prefix
// let x = 5;

// console.log(++x); // 6
// console.log(x);   // 6

// First increase the value, then use it.

// Easy way to remember:
// x++  → use first, increase later
// ++x  → increase first, use later

// Example:

// let a = 10;

// let b = a++;

// console.log(a); // 11
// console.log(b); // 10

// But:

// let a = 10;

// let b = ++a;

// console.log(a); // 11
// console.log(b); // 11
// 6. Logical Operators

// Used mainly with conditions.

// There are three important logical operators:

// &&  AND
// ||  OR
// !   NOT
// && AND

// Both conditions must be true.

// let age = 25;

// console.log(age >= 18 && age <= 60);
// // true

// Example:

// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//     console.log("Login successful");
// }

// Both conditions need to be true.

// || OR

// At least one condition must be true.

// let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend");
// }

// If either condition is true → result is true.

// ! NOT

// Reverses the boolean value.

// console.log(!true);  // false
// console.log(!false); // true

// Example:

// let loggedIn = false;

// if (!loggedIn) {
//     console.log("Please login");
// }
// 7. String Operator

// + can also be used to join strings.

// let firstName = "Sasmita";
// let lastName = "Sahoo";

// console.log(firstName + " " + lastName);

// Output:

// Sasmita Sahoo

// This is called string concatenation.

// Important
// console.log(10 + 20);     // 30
// console.log("10" + 20);   // "1020"

// When one operand is a string, + can perform string concatenation.

// 8. Ternary Operator ? :

// The ternary operator is a short form of if-else.

// Syntax:

// condition ? valueIfTrue : valueIfFalse;

// Example:

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// Output:

// Adult

// Normal if-else:

// if (age >= 18) {
//     result = "Adult";
// } else {
//     result = "Minor";
// }

// Ternary:

// let result = age >= 18 ? "Adult" : "Minor";
// 9. typeof Operator

// Used to find the data type of a value.

// console.log(typeof 10);       // "number"
// console.log(typeof "Hello");  // "string"
// console.log(typeof true);     // "boolean"
// console.log(typeof undefined);// "undefined"

// Example:

// let name = "Sasmita";

// console.log(typeof name);
// // string
// 10. Nullish Coalescing Operator ??

// Returns the right-side value when the left side is null or undefined.

// let username = null;

// let result = username ?? "Guest";

// console.log(result);

// Output:

// Guest

// Another example:

// let username = "Sasmita";

// let result = username ?? "Guest";

// console.log(result);

// Output:

// Sasmita
// Difference from ||
// let x = 0;

// console.log(x || 10); // 10
// console.log(x ?? 10); // 0

// || treats 0, "", false, null, and undefined as falsy.

// ?? only checks:

// null
// undefined
// 11. Optional Chaining ?.

// Used to safely access properties that might not exist.

// let user = {
//     name: "Sasmita"
// };

// console.log(user.name); // Sasmita
// console.log(user.address?.city); // undefined

// Without ?., accessing a property of an undefined object can cause an error.

// ⭐ Quick Revision

// Remember these for your interview:

// +    Addition / String concatenation
// -    Subtraction
// *    Multiplication
// /    Division
// %    Remainder
// **   Power

// =    Assignment
// +=   Add and assign
// -=   Subtract and assign
// *=   Multiply and assign
// /=   Divide and assign

// >    Greater than
// <    Less than
// >=   Greater/equal
// <=   Less/equal
// ==   Loose equality
// ===  Strict equality
// !=   Not equal
// !==  Strict not equal

// ++   Increment
// --   Decrement

// &&   AND
// ||   OR
// !    NOT

// ? :  Ternary
// typeof
// ??
// ?.
// 🎯 Most important for your React/JS interview

// Focus especially on:

// == vs ===
// &&, ||, !
// ++ vs --
// Prefix vs postfix
// + with strings
// Ternary operator
// Assignment operators
// typeof
// ?? and ?.
// Files, images, and data analysis are unavailable until usage resets tomorrow at 1:43 AM. Continue chatting with text only, or upgrade for more access.
// Upgrade to Plus