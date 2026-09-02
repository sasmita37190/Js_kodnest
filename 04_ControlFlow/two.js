// // Absolutely. Before starting loops, you should have a clear understanding of Control Flow in JavaScript. Here are your notes in a simple way.

// // JavaScript Control Flow — Complete Notes
// // 1. What is Control Flow?

// // Control Flow means:

// // The order in which JavaScript executes your code.

// // Normally, JavaScript executes code from top to bottom.

// // console.log("A");
// // console.log("B");
// // console.log("C");

// // Output:

// // A
// // B
// // C

// // But sometimes we want JavaScript to make decisions or repeat code.

// // That's where control flow comes in.

// // Main types
// // Control Flow
// // │
// // ├── 1. Conditional Statements
// // │     ├── if
// // │     ├── if...else
// // │     ├── else if
// // │     └── switch
// // │
// // ├── 2. Loops / Iteration
// // │     ├── for
// // │     ├── while
// // │     ├── do...while
// // │     └── for...of / for...in
// // │
// // └── 3. Jump Statements
// //       ├── break
// //       └── continue
// // 2. if Statement

// // if is used when you want to execute something only when a condition is true.

// // Syntax

// if (condition) {
//     // code
// }

// //Example:

// let age = 20;


// if (age >= 18) {
//     console.log("Eligible to vote");
// }

// Since 20 >= 18 is true:

// Eligible to vote
// Important

// If the condition is false, the code inside if doesn't execute.

// let age = 15;


// if (age >= 18) {
//     console.log("Eligible");
// }

// Output:

// Nothing
// 3. if...else

// Use this when you have two possibilities.

// if (condition) {
//     // true
// } else {
//     // false
// }

// Example:

// let age = 15;


// if (age >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }

// Output:

// Not Eligible

// Think:

//        Condition
//           ↓
//        TRUE?
//       /     \
//     YES      NO
//      ↓        ↓
//    if       else
// 4. else if

// Use else if when you have multiple conditions.

// Example:

// let marks = 75;


// if (marks >= 90) {
//     console.log("A+");
// } else if (marks >= 80) {
//     console.log("A");
// } else if (marks >= 60) {
//     console.log("B");
// } else if (marks >= 40) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }

// Output:

// B
// How it works

// JavaScript checks from top to bottom.

// marks >= 90?  ❌
// marks >= 80?  ❌
// marks >= 60?  ✅ → B

// Once one condition is true, the remaining conditions are skipped.

// 5. Nested if

// An if inside another if is called nested if.

// let age = 20;
// let hasID = true;


// if (age >= 18) {


//     if (hasID) {
//         console.log("Entry allowed");
//     }


// }

// Here:

// age >= 18
//     ↓
//    TRUE
//     ↓
// hasID?
//     ↓
//    TRUE
//     ↓
// Entry allowed

// You don't need to use nested if everywhere. Often you can simplify it:

// if (age >= 18 && hasID) {
//     console.log("Entry allowed");
// }
// 6. switch Statement

// switch is useful when you want to compare one value against multiple fixed values.

// For example, your season problem:

// let month = 7;


// switch (month) {


//     case 3:
//     case 4:
//     case 5:
//         console.log("Summer");
//         break;


//     case 11:
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;


//     case 6:
//     case 7:
//     case 8:
//     case 9:
//         console.log("Rainy");
//         break;


//     default:
//         console.log("Invalid month");
// }

// Output:

// Rainy
// 7. How switch Works

// Suppose:

// let month = 7;

// JavaScript does approximately:

// switch(month)
//       ↓
// Is 7 === 3? ❌
// Is 7 === 4? ❌
// Is 7 === 5? ❌


// Is 7 === 11? ❌
// Is 7 === 12? ❌
// Is 7 === 1? ❌
// Is 7 === 2? ❌


// Is 7 === 6? ❌
// Is 7 === 7? ✅
//       ↓
// "Rainy"
// case

// Represents a possible value.

// case 7:

// means:

// If the value is 7, execute this code.

// 8. Why break?

// break tells JavaScript:

// Stop the switch here.

// Example:

// let day = 2;


// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;


//     case 2:
//         console.log("Tuesday");
//         break;


//     case 3:
//         console.log("Wednesday");
//         break;
// }

// Output:

// Tuesday

// Without break, JavaScript can continue executing the following cases. This is called fall-through.

// 9. Multiple Cases with One Output

// This is very important for your season example.

// case 3:
// case 4:
// case 5:
//     console.log("Summer");
//     break;

// It means:

// 3 → Summer
// 4 → Summer
// 5 → Summer

// You don't need to write:

// case 3:
//     console.log("Summer");
//     break;


// case 4:
//     console.log("Summer");
//     break;


// case 5:
//     console.log("Summer");
//     break;
// 10. default

// default works like the else of a switch.

// let day = 10;


// switch (day) {


//     case 1:
//         console.log("Monday");
//         break;


//     case 2:
//         console.log("Tuesday");
//         break;


//     default:
//         console.log("Invalid day");
// }

// Since 10 doesn't match any case:

// Invalid day
// 11. if vs switch
// Use if/else when:

// You are checking conditions or ranges.

// if (marks >= 90) {
//     console.log("A");
// }
// Use switch when:

// You are checking specific values.

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
// }
// Simple rule
// Condition / Range → if
// Fixed values      → switch
// 12. Comparison Operators

// Control flow heavily uses comparison operators.

// Operator	Meaning	Example
// >	greater than	10 > 5
// <	less than	5 < 10
// >=	greater/equal	10 >= 10
// <=	less/equal	5 <= 10
// ==	equal value	5 == "5"
// ===	equal value + type	5 === "5"
// !=	not equal	5 != 3
// !==	not equal value/type	5 !== "5"
// Most important

// Prefer:

// ===

// instead of:

// ==

// Example:

// 5 == "5"     // true
// 5 === "5"    // false

// Because:

// ==  → checks value
// === → checks value + data type
// 13. Logical Operators

// These are extremely important.

// AND &&

// Both conditions must be true.

// let age = 20;
// let hasID = true;


// if (age >= 18 && hasID) {
//     console.log("Allowed");
// }
// TRUE && TRUE = TRUE
// TRUE && FALSE = FALSE
// OR ||

// At least one condition must be true.

// let day = "Sunday";


// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend");
// }
// TRUE || FALSE = TRUE
// FALSE || FALSE = FALSE
// NOT !

// Reverses true/false.

// let loggedIn = false;


// if (!loggedIn) {
//     console.log("Please login");
// }

// Because:

// !false → true
// !true  → false

//========================================
// 14. Truthy and Falsy
//====================================



// JavaScript treats some values as false inside conditions.

// Falsy values

// Remember these:

// false
// 0
// -0
// ""
// null
// undefined
// NaN

// Example:

// let name = "";


// if (name) {
//     console.log("Name exists");
// }

// Nothing prints because "" is falsy.

// But:

// let name = "Sasmita";


// if (name) {
//     console.log("Name exists");
// }

// Output:


// Name exists


//========================================
// 15. Ternary Operator
//==========================================

// A short way to write simple if...else.

// Normal:
// let age = 20;


// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// Ternary:
// let age = 20;


// let result = age >= 18 ? "Adult" : "Minor";


// console.log(result);

// Output:

// Adult

// Structure:

// condition ? trueValue : falseValue

// Use ternary for simple decisions, not complicated logic.


//==============================
// 16. break
//====================================




// break means:

// Immediately stop the current loop or switch.

// Example:

// for (let i = 1; i <= 10; i++) {


//     if (i === 5) {
//         break;
//     }


//     console.log(i);
// }

// Output:

// 1
// 2
// 3
// 4

// We will learn this properly when we start loops.


//=======================================
// 17. continue
//==================================


// continue means:

// Skip the current iteration and continue with the next one.

// Example:

// for (let i = 1; i <= 5; i++) {


//     if (i === 3) {
//         continue;
//     }


//     console.log(i);
// }

// Output:

// 1
// 2
// 4
// 5

// Again, you'll understand this much better with loops.

// ⭐ Final Control Flow Map

// Keep this in your notes:

//                  CONTROL FLOW
//                       │
//           ┌───────────┴───────────┐
//           │                       │
//      DECISION                 REPETITION
//           │                       │
//      ┌────┴────┐             ┌────┴─────┐
//      │         │             │          │
//     if      switch          for       while
//      │                       │          │
//  if/else                 do...while  for...of
//  else if                              for...in
//  nested if
//  ternary

// And:

// break    → stop
// continue → skip current iteration
// What you should know before loops

// Make sure you understand these:

// ✅ if
// ✅ if...else
// ✅ else if
// ✅ nested if
// ✅ switch
// ✅ case
// ✅ break
// ✅ default
// ✅ comparison operators
// ✅ logical operators
// ✅ truthy/falsy
// ✅ ternary operator

// Once these are clear, the next topic is LOOPS:

// for loop
//    ↓
// while loop
//    ↓
// do...while
//    ↓
// break & continue
//    ↓
// nested loops
//    ↓
// for...of
//    ↓
// for...in

// Start with for loop first. It is the most important loop for your current JavaScript learning.