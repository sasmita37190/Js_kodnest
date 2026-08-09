// 1. Function Declaration (Named Function)
// This is the most common way to create a function.


//Note:Definition:

//Hoisting is JavaScript's behavior of moving declarations to the top of their scope before the code executes.

function greet() {
    console.log("Hello");
}

greet();

//Can be called before it is defined because of hoisting.like below

// sayHello();

// function sayHello() {
//     console.log("Hi");
// } 




//ex-2

function square(num) {
    console.log(num * num);
}
square(5); // Output: 25









// 2. Function Expression
// A function is stored inside a variable.


const greet = function () {
    console.log("Hello");
};

greet();

//Output:Hello: Cannot be called before declaration.

// greet(); // Error

// const greet = function () {
//     console.log("Hello");
// };



// 3. Arrow Function (ES6)
// Shorter syntax introduced in ES6.

// Syntax
const greet = () => {
    console.log("Hello");
};

greet();
//Output:Hello





// 4. Anonymous Function
// A function without a name.

setTimeout(function () {
    console.log("Hello");
}, 1000);




// 5. Immediately Invoked Function Expression (IIFE)

// Runs immediately after it is created.

(function () {
    console.log("I run immediately!");
})();

// Output

// I run immediately!

// Arrow version:

(() => {
    console.log("Hello");
})();

