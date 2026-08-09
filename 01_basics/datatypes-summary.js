//Primitive


// 7 types: String, Number, Boolean, Null, Undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.5;
console.log(typeof score);
console.log(typeof scoreValue);



const isLoggedIn = false
const outssidetemp = null
console.log(typeof isLoggedIn);  // boolean
console.log(typeof outssidetemp);  //object

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id);
console.log(anotherId);

console.log(id === anotherId); // false

const bigNumber = 123445678n;
console.log(bigNumber)
console.log(typeof bigNumber) //bigint


//Reference (Non Primiitve) : Object,Array,Function

//Array
const heros = ["shaktiman", "doga", "batman"]
console.log(heros);

//Object

let person = {
    name: "sasmita",
    age: 24
};
console.log(person);

//Function

const myFunction = function() {
    console.log("Hello WOrld!");
}
console.log(typeof myFunction);



//Important Note:

// Type of val	                                            Result
// ------------                                             --------------
// Undefined	                                    =                                           "undefined"
// Null	                                            =                                           "object"
// Boolean	                                        =       "boolean"
// Number	                                        =         "number"
// String	                                        =          "string"
// Object (native and does not implement [[Call]])	 =         "object"
// Object (native or host and does implement [[Call]])	=     "function"
// Object (host and does not implement [[Call]])	
// Implementation-defined except may not be "undefined", "boolean", "number", or "string".





// ---------------------------:Memory----------------------------------------------


//1.Stack (Primitive), Heap (Non-Primitive)


let myyName ="sasmitaytbcom";
anothername ="lizaytbchannel"

console.log(myyName)
console.log(anothername)


let userOne = {
    email: "subu@google.com",
     upi: "rinku@ybl"
}
let userTwo = userOne;

userTwo.email = "sulekha@google.com"

console.log(userOne.email) 
console.log(userTwo.email) 

//Note: In JavaScript, primitive values are immutable, meaning they cannot be changed after they are created.
//  When you assign a primitive value to a variable, it is stored directly in the variable. 
// On the other hand, non-primitive values (objects) are mutable and are stored as references in the variable. When you assign an object to a variable,
//  it stores a reference to the location of the object in memory. Therefore, when you modify the object through one variable, it affects all variables that reference the same object.


// Interview Cheat Sheet

// ✅ Primitive Types → Stack → Copy

// let a = 10;
// let b = a;

// Changing b does not change a.

// ✅ Reference Types → Heap → Reference

// let obj1 = { name: "Sasmita" };
// let obj2 = obj1;

// Changing obj2.name also changes obj1.name.


// ⭐ One-Line Memory Trick
// Stack = Primitive = Copy = Separate values
// Heap = Object/Array/Function = Reference = Shared object