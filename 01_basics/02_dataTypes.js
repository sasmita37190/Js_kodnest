"use strict"; // treat all js code as newer version

// alert(2+3); // we r using node js, not browser, so alert is not working here. It is used in browser to show pop up message.

// console.log(2+3); console.log("Sasmita"); MDN, TC39
// Data types in JS

// 1. Primitive data types: 
// string, number, boolean, null, undefined, symbol,bigint

// String
let name = "Sasmita";
console.log("My name is: " + name);

// Number
let age = 25;
console.log("My age is: " + age);

// Boolean
let isMarried = false;

// Null
let city = null;

// Undefined
let state;
console.log("State is: " + state);

// Symbol
let sym1 = Symbol("sym1");
let sym2 = Symbol("sym1");
console.log("Symbol 1 is: " ,sym1);
console.log("Symbol 2 is: " ,sym2);

// BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log("BigInt number is: " + bigIntNum);


// 2. Non-primitive data types:
// object, array, function

// Object

let person = {
    name: "Sasmita",
    age: 25,
    isMarried: false
};

console.log("Person is: " ,person);
console.log(typeof "SASMITA");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof null); //object
console.log(typeof undefined); // undefined is a type itself, it is not a value of any other type.
