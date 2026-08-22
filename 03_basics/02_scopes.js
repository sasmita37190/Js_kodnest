//Global Scope
let name = "Sasmita";


if (true) {
    console.log(name); // ✅
}

//name is outside the block, so it can be accessed inside.



//===============================================================================
// Block Scope -Variables declared with let and const inside {} are block-scoped.
//================================================================================

//====================
//1.let- block scope
//=========================


// A block is anything inside { }.

{
    let x = 10;


    console.log(x); // ✅ 10
}


console.log(x); // ❌ Error

//p/p: - Once you come outside { }, x is not accessible.
// So: let can be accessed only inside the block where it was declared.


//=========================================================
// 2. const → Block Scope
//=========================================================

// const works the same way regarding scope.

{
    const x = 10;


    console.log(x); // ✅ 10
}


console.log(x); // ❌ Error

// So:

// let    → Block Scope
// const  → Block Scope



//=========================================
// 3. var → Function Scope
//=========================================

// This is where var is different.

{
    var x = 10;


    console.log(x); // ✅ 10
}


console.log(x); // ✅ 10

// x available outside {},Because var does not follow block scope.

// var is function-scoped.

// A normal { } block does not stop a var variable.


//ex of al 3

if (true) {

    let a = 10;
    const b = 20;
    var c = 30;

}

console.log(a); // ❌ Error
console.log(b); // ❌ Error
console.log(c); // ✅ 30


// 1. Just { } = a block
// {
//     var x = 10;


//     console.log(x); // ✅ 10
// }


// console.log(x); // ✅ 10

// Here, { } is just a normal block.

// For var, this block does not create a scope boundary.

// So x is still available outside:


// 2. function { } = function boundary

// Now look at:

// function test() {
//     var x = 10;


//     console.log(x); // ✅ 10
// }


// test();


// console.log(x); // ❌ Error

// Here, function test() { } creates a function scope.

// var x belongs to the function.

// Outside function
// │
// │  x ❌
// │
// └── function test()
//        │
//        └── var x = 10 ✅

// So when you come outside the function, you cannot access x.

//====================================================
//imp note:
//=============================================================

// let / const
//      ↓
// respect { } blocks

// var
//      ↓
// ignores normal { } blocks
//      ↓
// stops at function boundary














//global scope - its value can availabe on the inner scope

var c = 300
let a = 200;

// block -scope

if (true) {
let a = 10;     // inner value can not be shown in the loop
const b = 20;
var c = 30;
console.log("Inner: ", a)

}


console.log(a);  // error
// console.log(b);  // error
// console.log(c);   // 30


//core scope-code scopre through npode global scope is diff

function test() {    
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a); // ✅
    console.log(b); // ✅
    console.log(c); // ✅
}

test();

console.log(a); // ❌
console.log(b); // ❌
console.log(c); // ❌




function test() {

    if (true) {
        let a = 10;
        const b = 20;
        var c = 30;
    }

    console.log(a); // ❌
    console.log(b); // ❌
    console.log(c); // ✅
}

//All three are inside the function, so all three are unavailable outside the function.

// The if has its own block:

// function test()
// │
// └── if { }
//      │
//      ├── let a      ← stays inside if
//      ├── const b    ← stays inside if
//      └── var c      ← escapes the if block

// But all of them are still inside the function.

// So:
//==============================note=================================
// let/const → stop at the nearest { } block
// var       → ignores normal { } block, but stops at function




//Local Scope
// 1. Local scope inside a function
function test() {
    let name = "Sasmita";


    console.log(name); // ✅
}


test();


console.log(name); // ❌ Error

// Here name is local to the function test().

// Outside
// │
// │   name ❌
// │
// └── test()
//      │
//      └── name = "Sasmita" ✅


// //===========================
//Lexical Environment
//===============================
// Lexical Environment?

// This sounds complicated, but the basic idea is simple.

// A lexical environment is the internal environment JavaScript creates to keep track of:

// Variables and their values
// Where to look when a variable isn't found in the current environment

// Think of it like a box.

// For example:






// | Scope              | Meaning                                                     |
// | ------------------ | ----------------------------------------------------------- |
// | **Global scope**   | Variable can be accessed broadly throughout the program     |
// | **Local scope**    | Variable is available only in its particular function/block |
// | **Block scope**    | `let`/`const` are limited to `{ }`                          |
// | **Function scope** | `var` is limited to a function                              |
