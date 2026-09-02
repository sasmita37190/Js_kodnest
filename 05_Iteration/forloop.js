//===================
//for {}-block 
//===================

//Pattern
//----------------------

//for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//Type-1

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
    
}

// console.log(element);



//Type- 1 ex-2


const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse"
];


for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}


//Type1 ex-3

for(let i = 0; i <=10; i++) {
    const element = i;
    if(element == 5) {
        console.log("5 is best number")
    }
    console.log(element)
}
console.log(element) //error



//Type-2

let element1;

for (let index = 0; index < 10; index++) {
    element1 = index;
}

console.log(element1); // ✅ 9



// type2 -ex-2


// let and Scope in a for Loop

// This is what you were asking about earlier.

for (let i = 0; i < 5; i++) {
    console.log(i);
}


//console.log(i); // ❌ Error

// Because:

// let i = 0 , is declared inside the for block.So i has block scope.but

// let element;


for (let i = 0; i < 5; i++) {
    element = i;
}


//console.log(element); // 4

// works because element was declared outside the loop.




//------------------------------------------------------------------------------------------


// Common for Loop Patterns


// Increasing

// for (let i = 0; i < 10; i++) {
// }


// Decreasing

// for (let i = 10; i > 0; i--) {
// }


// Increase by 2

// for (let i = 0; i < 10; i += 2) {
// }


// Increase by 5

// for (let i = 0; i <= 50; i += 5) {
// }

//----------------------------------------------------------------------------------------------------







// Important rule to remember

// let and const → block scope

// {
//     let a = 10;
//     const b = 20;


//     console.log(a); // ✅
//     console.log(b); // ✅
// }


// console.log(a); // ❌
// console.log(b); // ❌




//------------------------------------------------



for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j) ;   
}
}


let myArray = ["batsman", "flash", "Superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// mportant rule ⭐

// Array length = number of elements
// Last index = length - 1

// For your array:

// length = 3
// last index = 2





