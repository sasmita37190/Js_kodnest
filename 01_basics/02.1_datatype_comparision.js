
// var → Function Scoped
// let and const → Block Scoped




// 1. var is Function Scoped
// Example 1 (Inside an if block)


// if (true) {
//     var name = "Sasmita";
// }
// console.log(name);


// Output: Sasmita



// Available outside the block,var ignores the {} block.





// 2. let is Block Scoped

// if (true) {
//     let name = "Sasmita";
// }

// console.log(name);

//o/p: - ReferenceError: name is not defined




function showScope() {
    let name ="sasmita"
    var city= "Bhubaneswar"

console.log(name);
console.log(city);

}
showScope()

console.log(name);
console.log(city);


