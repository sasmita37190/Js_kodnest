// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 1);


//Comparison operators compare two values and always return a Boolean:true,false

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
// === → === (Strict Equality),=== checks:Value, Datatypechecks datatype and value, so null === 0 is always false.

// https://262.ecma-international.org/5.1/#sec-11.4.3



//Interview Cheat Sheet

// | Expression          | Output  | Reason                               |
// | ------------------- | ------- | ------------------------------------ |
// | `2 > 1`             | `true`  | 2 is greater                         |
// | `"2" > 1`           | `true`  | `"2"` → `2`                          |
// | `"2" == 2`          | `true`  | `==` converts type                   |
// | `"2" === 2`         | `false` | Different types                      |
// | `null > 0`          | `false` | `0 > 0` is false                     |
// | `null >= 0`         | `true`  | `0 >= 0` is true                     |
// | `null == 0`         | `false` | `null` is not equal to `0` with `==` |
// | `null == undefined` | `true`  | Special JavaScript rule              |
// | `undefined > 0`     | `false` | `undefined` → `NaN`                  |
// | `undefined == 0`    | `false` | Special JavaScript rule              |
