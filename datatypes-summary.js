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