//Primitive


// 7 types: String, Number, Boolean, Null, Undefined,Symbol,BigInt


const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false
const outssidetemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // false

const bigNumber = 123445678n;
console.log(bigNumber)


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
