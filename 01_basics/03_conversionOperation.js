// let score = "33abc"
// let score =  true  
let score = "sasmita" //NaN

// console.log(typeof score);
// console.log(typeof(score));


//1.Convert in Number

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)//NaN, True-1,false-0

//convert : "33" => 33
//"33abc" => NaN
// true=> 1, Fale => 0


//2.Convert in Boolean

let isLoggedIn = 0
let booleanisLoggedIn = Boolean(isLoggedIn) // false
//console.log(booleanisLoggedIn);

//"sasmita"=> true, 1- true, 0= false, ""=> false, null=> false, undefined => false, NaN => false

//3.Convert in String

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)