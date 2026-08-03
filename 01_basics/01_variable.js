const accountId = 144563
let accountEmail = "sasmita@123";
var accountPassword= "45123";
accountCity = "Bangalore"
let accountState;


//accountId = 123456


console.log("1.count Id is: " + accountId);
console.log("2.count Email is: " + accountEmail);
console.log("3.count Password is: " + accountPassword);
console.log("4.count City is: " + accountCity);

accountEmail = "sasmita@456";

//var is updating the value of accountPassword, but it is not recommended to use var in modern JS. 
accountPassword = "451234";
//var redclaring the value of accountPassword, but it is not recommended to use var in modern JS.
var accountPassword= "754125";


accountCity = "Mumbai"
 


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);





//NOTE:
//--------------------------



// Prefer not to use var, because of its scope issue. It is better to use let and const.

//let declares a variable whose value can be changed later.
//const declares a variable whose value cannot be changed later.


//1.var

// var was introduced in ES5 (old JavaScript).
// It is function-scoped.
// It can be updated.
// It can be redeclared.
// Not recommended in modern JavaScript.


//2.let

// Introduced in ES6 (2015).
// It is block-scoped.
// It can be updated.
// It cannot be redeclared in the same scope.
// Recommended for values that will change.


// 3. const

// Definition
// Introduced in ES6 (2015).
// It is block-scoped.
// It cannot be updated (reassigned).
// It cannot be redeclared.
// Use it for values that should never change.