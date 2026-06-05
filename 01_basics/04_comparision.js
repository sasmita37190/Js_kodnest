// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 1);


////Comparison operator converts null to 0.

console.log(null > 0)  //0 is not greater than 0.
console.log(null == 0) //0 is equal to 0.
console.log(null >= 0) //0 is greater than or equal to 0.

//null == undefined is true. null == any_number is false.null == 0  false



console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)



//Rule: undefined becomes NaN; any comparison with NaN is false.

//=== -checks data type and value so null === 0 is always false.

//----------------NOTE:-----------------------

// >, <, >=, <= → convert null to 0.
// == → null is only equal to undefined.
// === → checks datatype and value, so null === 0 is always false.