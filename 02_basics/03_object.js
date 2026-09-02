//Object:
// An object is a collection of key-value pairs.

//name        → key
// "Sasmita"   → value

// age         → key
// 23          → value   so Object = collection of related data and functionality.


// singleton
//Object.create


//Singleton is a design pattern that ensures a class or object has only one instance and provides a common way to access that instance.


//Singleton
// 
// Only ONE instance
//    ↓
// Shared throughout the application


//2.object literal


// const JsUser = {
//     name: "Sasmita",
//     age: 23,
//     location: "bbsr"
// };  
//You simply use {} to create an object.

//symbol declare
//Symbol() creates a unique symbol value.

// Think of it as a special, unique key.

const mySum = Symbol("key1")

const JsUser = {
    name: "Sasmita",
    "full name": "sasmita sahoo",
    [mySum]: "myKey1",  //Use the value stored inside mySum as the property key.
    age: 23,
    location: "bbsr",
    email: "sasmita@234.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(JsUser.email)   //invalid
// console.log(JsUser["email"]); // proporty contain spaces
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySum])
// console.log(JsUser[mySum])



//3. Changing Object Properties

JsUser.email = "sasmit@chatgpt.com"
//Object.freeze(JsUser)  //his is useful when you want an object to remain unchanged.

 JsUser.email = "sasmita@323.com"
//console.log(JsUser)




//4. Adding a Function to an Object
//When a function belongs to an object, we commonly call it a method.
JsUser.greeting = function(){
 console.log("Hello js user")   
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}` );
}

console.log(JsUser.greeting());

// Call greeting()
// It prints "Hello js user"
// The function returns undefined
// console.log() prints that undefined

console.log(JsUser.greetingTwo)
//Get the name property from the object that is calling this method.

//Method = function stored as an object property.




// . Why use Symbol?

// Symbols are useful when you need a unique property key that won't accidentally conflict with another property.

// For example:

// const id = Symbol("id");

// const user = {
//     name: "Sasmita",
//     [id]: 123
// };

// The Symbol key is unique.






//First:
// sasmita@234.com

// ↓ change

// sasmit@chatgpt.com

// ↓ change

// sasmita@323.com
// 


//Object.freeze()
//         ↓
// Can't modify existing properties
// Can't add new properties
// Can't delete properties


//6.3. Understand this visually

// JsUser
//    |
//    | calls
//    ↓
// greetingTwo()
//    |
//    ↓
// this = JsUser
//    |
//    ↓
// this.name
//    |
//    ↓
// "Sasmita"

// When a normal function is called like:

// object.method()

// inside that method, this generally refers to the object before the dot:

// object.method()
//    ↑
 //this




 //Object.create() creates a new object and can set its prototype.




 //5. What about Singleton?



// Singleton is a design pattern that ensures a class or object has only one instance.

// That's correct.

// But there's an important clarification:

// Object literal ≠ Singleton

// This:

// const user = {
//     name: "Sasmita"
// };

// is an object literal.

// It doesn't automatically mean Singleton.

// Singleton is a design pattern where you ntentionally make sure only one instance exists.

// Object literal
//     ↓
// Creates an object using {}

// Singleton
//     ↓
// Design pattern for having only ONE instance



















// 1. Object creation ⭐⭐⭐⭐⭐
// 2. Properties & values ⭐⭐⭐⭐⭐
// 3. Dot/bracket notation ⭐⭐⭐⭐⭐
// 4. Add/update/delete properties ⭐⭐⭐⭐⭐
// 5. Methods ⭐⭐⭐⭐⭐
// 6. this ⭐⭐⭐⭐⭐
// 7. Object destructuring ⭐⭐⭐⭐⭐
// 8. Spread with objects ⭐⭐⭐⭐⭐
// 9. Object.freeze() ⭐⭐⭐
// 10. Symbol ⭐⭐
// 11. Object.create() / prototypes → later
// 12. Singleton → later