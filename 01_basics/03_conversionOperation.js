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
// true=> 1, False => 0


//2.Convert in Boolean

let isLoggedIn = 0
let booleanisLoggedIn = Boolean(isLoggedIn) // false
//console.log(booleanisLoggedIn);

//"sasmita"=> true, 1- true, 0= false, ""=> false, null=> false, undefined => false, NaN => false

//3.Convert in String

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);

// ***************************OPERATIONS************************************************************


let value = 3
let negValue = -value
console.log(negValue); // -3


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
//console.log(2**3)
// console.log(2/2);
// console.log(2%2); // modulus operator, it gives the remainder after division


let str1 = "Hello"
let str2 = "World"

let str3 = str1 + str2
console.log(str3); // HelloWorld


console.log("1"+2);
//"1" is a string So, When + is used with a string, JavaScript converts the other value to a string and concatenates.So,o/p "1" + "2" = "12"
console.log(1+"2")
//"2" is a string.JavaScript converts 1 to "1" and concatenates."1" + "2" = "12"
console.log("1" + "2");
//Both are strings."1" + "2" = "12"


//----------------------------------------------------------------------------------------
//******NOTE:******* */
console.log("1" + 2 + 2);
//Evaluation happens left to right.
//"1" + 2 = "12","12" + 2 = "122"
////if string is in the first then treat all as string and 
// if string is in the last then treat all as number and then add string at the end.

console.log(1 + 2 + "2")
//1 + 2 = 3, 3 + "2" = "32"
//he numbers are added first because evaluation happens left to right.
// if string is in the last then treat all as number and then add string at the end.

//------------------------------------------------------------------------------------------

console.log((3 + 4) * 5 % 3);
//(3 + 4) = 7, 7 * 5 = 35, 35 % 3 = 11, remainder 2 so o/p = 2

// console.log( + true)
// console.log( + false)
// console.log(+"")


let num1,num2,num3
num1 = num2 = num3 = 2+2

//1. Postfix Increment (a++)
//Use the current value first, then increment.Return first, increase later."

let a = 5;
let b = a++;

console.log(a);  // 6
console.log(b);   // 5

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter); //101


// 2. Prefix Increment (++a)
//Increment first, then use the value.Increase first, return later."

let a = 5;
let b = ++a;

console.log(a);  //a = a + 1;  a = 6
console.log(b);   // b = a;      b = 6

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);



//-------------------NOTE: ----------------------------

// a++  => Return → Increase
// ++a  => Increase → Return

// a--  => Return → Decrease
// --a  => Decrease → Return