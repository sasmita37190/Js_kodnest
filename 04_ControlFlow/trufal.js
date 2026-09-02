//14. Truthy and Falsy

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
//BigInt on

// Example:

let name = "";


if (name) {
    console.log("Name exists");
}

// Nothing prints because "" is falsy.

// But:

let name1 = "Sasmita";


if (name1) {
    console.log("Name exists");
}

// Output:

// Name exists

//[]- true, ""- empty string- true

const userEmail = ""

if(userEmail) {
    console.log("Got user email");
} else {
console.log("Don't have user email");
}




//Nullish Coalescing Operator (??): null undefined

let value1;
// value1 = 5 ?? 10
// value1 = null ?? 10
// value1 = undefined ?? 15
value1 = null ?? 10 ?? 20;

console.log(value1);


// Ternary operator

//Consition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 800") : console.log*("more than 80")











