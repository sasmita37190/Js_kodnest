//Control Flow


//if statement


//Ex-1

let age = 16;

if (age >= 18) {

    console.log("Eligible for vote")
}
console.log("program finished")

//EX-2

const isUserLoggedIn = true

if( 2 === 2) {

    console.log("Executed");

}

//ex-3

const temperature1 = 41

if(temperature1 < 50) {
    console.log("lesss than 50")
}
console.log("greater than 41")

//========================
//If - else statement    
//========================

let age2 = 18;

if(age2 >= 18) {
    console.log("Eligible for vote")
} else {
    console.log("Not eligible for vote")
}



//ex-2

const temperature2 = 41

if(temperature2 === 50) {
    console.log("lesss than 50")
} else {
console.log("greater than 41")
}




// const score = 200

// if( score > 100) {
//     const power = "fly"  //const,let -block scope problem, var-completeyly global
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);  // {}- scope 


const balanace1 = 2000
if(balanace1 < 20000) console.log("test")

// ========================
// else-if
// ==========================

let score = 85;

if(score >= 90) {
    console.log("Grade: A")
} else if (score >= 80) {
    console.log("Grade: B") ;
} else if(score >= 70) {
    console.log("Grade:C");
} else {
    console.log("Grade: F");
}






// 5. Nested if

// An if inside another if is called nested if.

let age5 = 20;
let hasID = true;


if (age5 >= 18) {


    if (hasID) {
        console.log("Entry allowed");
    }
}


// ou don't need to use nested if everywhere. Often you can simplify it:

// if (age >= 18 && hasID) {
//     console.log("Entry allowed");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
//const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy the course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}


//&&(And) means all condition should be true ||(or) means 1 condition should be true











//============================================
//switch case:  Use switch when: You are checking specific values.
//=============================================

var day1 = 3;
var dayName;

switch(day1) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName= "WednesDay";
        break;
    default:
        dayName = "Invalid day"; 
}

console.log(dayName);




var day = "Sunday";

switch(day) {

case "Monday":
    console.log("Its a workinngn day");
    break;
case "Tuesday":
    console.log("Its a working day");
    break;
case "Wednesday":
    console.log("Its a workinngn day");
    break;
case "Thursday":
    console.log("Its a working day");
    break;
case "Friday":
    console.log("Its a working day");
case "Saturday":
    console.log("Its a weekend");
case "Sunday":
    console.log("It's a weekend");
    break;
default:
    console.log("Invalid day")
console.log(day);
}




// 12. Comparison Operators

// Control flow heavily uses comparison operators.

// | Operator | Meaning              | Example     |
// | -------- | -------------------- | ----------- |
// | `>`      | greater than         | `10 > 5`    |
// | `<`      | less than            | `5 < 10`    |
// | `>=`     | greater/equal        | `10 >= 10`  |
// | `<=`     | less/equal           | `5 <= 10`   |
// | `==`     | equal value          | `5 == "5"`  |
// | `===`    | equal value + type   | `5 === "5"` |
// | `!=`     | not equal            | `5 != 3`    |
// | `!==`    | not equal value/type | `5 !== "5"` |







//========NOTE=====


//== means compare two values, but JavaScript can convert their data types before comparing.
//console.log(5 == "5"); true bcZ  == converts the string "5" to a number and then compares:


//3. === → Strict equality ⭐

//=== means: console.log(5 === "5"); false

//Are the value AND the data type the same?

//| Operator | Meaning                               | Example     | Result   |
// | -------- | ------------------------------------- | ----------- | -------- |
// | `=`      | Assign value                          | `x = 5`     | Stores 5 |
// | `==`     | Compare value, allows type conversion | `5 == "5"`  | `true`   |
// | `===`    | Compare value + type                  | `5 === "5"` | `false`  |


//In modern JavaScript, prefer === for comparisons because it avoids unexpected type conversions.

// For example:

// let age = 18;

// if (age === 18) {
//     console.log("Adult");
// }