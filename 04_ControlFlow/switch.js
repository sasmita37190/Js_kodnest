let month = 3;

switch(month) {
    case 3:
        case 4:
            case 5:
                console.log("Summer");
                break;
    case 11:
        case 12:
            case 1:
                case 2:
                    console.log("Winter");
                    break;

    case 6:
        case 7:
            case 8:
                case 9:
                    console.log("Rainy");
                    break;

                    default:
                        console.log("Invalid month");

                
}


// const  month = 2;
// switch(month) {
//             case 1:
//                 console.log("January");
//                 break;
//             case 2:
//                 console.log("february");
//                 //break;    if break removed then it prints all the value after break
//             case 1:
//                 console.log("March");
//                 //break;
//             case 1:
//                 console.log("April");
//                 //break;
//             default:
//                 console.log("december");
//                 break;

// }





























// 15. Ternary Operator

// A short way to write simple if...else.

// Normal:
// let age = 20;


// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// Ternary:
// let age = 20;


// let result = age >= 18 ? "Adult" : "Minor";


// console.log(result);

// Output:

// Adult

// Structure:

// condition ? trueValue : falseValue

// Use ternary for simple decisions, not complicated logic.

// 16. break

// break means:

// Immediately stop the current loop or switch.

// Example:

// for (let i = 1; i <= 10; i++) {


//     if (i === 5) {
//         break;
//     }


//     console.log(i);
// }

// Output:

// 1
// 2
// 3
// 4

// We will learn this properly when we start loops.