//Array is a collection of items stored at contiguous memory locations. It is a data structure that can hold more than one value at a time. It is used to store a list of values in a single variable.
//mdn

// const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[0])
//console.log(myArr[5])


// const myHeros = ['spiderman', 'ironman', 'thor', 'hulk', 'captain america']
// console.log(myHeros[0])

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0])


//Array Method



//Push() method adds one or more elements to the end of an array and returns the new length of the array.
//pop() method removes the last element from an array and returns that element. This method changes the length of the array.



//myArr.push(6)
//myArr.push(7, 8, 9)
//myArr.pop()
//console.log(myArr)


// myArr.unshift(0) //adds an element to the beginning of an array
// myArr.shift(0)
// console.log(myArr)

// console.log(myArr.includes(9))
// returns true if the array contains the specified element, otherwise false

// console.log(myArr.indexOf(10)) 
//returns the index of the specified element, otherwise -1


//const newArr = myArr.join()


// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr) //string




//slice, spice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1)
// console.log("B ", myn1);




// const myn2 = myArr.splice(1,3) 

// console.log("C ", myArr)
// console.log(myn2)

//____________________________NEW EXAMPLE_____________________________

//EX-2

//                     sta    end
//                      -     -
//             0  1  2  3  4  5

const myArr = [2, 3, 4, 5, 6, 7]

console.log("A ", myArr);

const sarr1 = myArr.slice(3,5)
console.log("B ", sarr1)// [5,6]


const sarr2 = myArr.splice(2,5)
console.log("C ", sarr2)  //[4,5,6,7]
console.log("Original Array NOw Changed:",  myArr)  //[2,3]




//-------------------------------------------------------------------------------------


// ⭐ The difference using YOUR array
// slice(1, 3)
// Original: [0, 1, 2, 3, 4, 5]
//                 └──┘
//                 1  2

// Result:   [1, 2]

// Original: [0, 1, 2, 3, 4, 5]  ← unchanged
// splice(1, 3)
// Original: [0, 1, 2, 3, 4, 5]
//                 └──────┘
//                 1  2  3
//                 REMOVE

// Removed:  [1, 2, 3]

//Original: [0, 4, 5]  ← changed




// Just remember this

// slice(1, 3)

// 1 = start index
// 3 = stop before index 3

// splice(1, 3)

// 1 = start index
// 3 = remove 3 elements

// That's the main difference.


//***************************EXPLANATION************************************************************* */


// 1. Your original array
// const myArr = [0, 1, 2, 3, 4, 5];

// 3. slice(1, 3)

// const myn1 = myArr.slice(1, 3);

// slice(start, end) so start = 1, end   = 3

//Start at index 1 and stop BEFORE index 3.


//            Value:   0   1   2   3   4   5
//            Index:   0   1   2   3   4   5
//                         ↑       ↑
//                        start    stop

// So it takes:

// index 1 → 1 ✅
// index 2 → 2 ✅
// index 3 → 3 ❌ STOP

// Therefore:

// myn1 = [1, 2]

// Very important:
// myArr is not changed.

// myArr = [0, 1, 2, 3, 4, 5]
// myn1  = [1, 2]


// 5. Now splice(1, 3)

// Your code:

// const myn2 = myArr.splice(1, 3);

// This is different.

// splice() works like:

// splice(start, deleteCount)



// myArr.splice(1, 3)

// means:

// Start at index 1 and remove 3 elements.

// Current myArr is still:

// Value:   0   1   2   3   4   5
// Index:   0   1   2   3   4   5
//              ↑
//            start


// Starting from index 1:

// 1
// 2
// 3

// That's 3 elements.So they are removed:
// 0   [1   2   3]   4   5
//     └── removed ──┘

// The original array becomes:
// myArr = [0, 4, 5]

// And splice() returns the removed elements:
// myn2 = [1, 2, 3]


//myArr = [0, 4, 5]
//myn2 = [1, 2, 3]

