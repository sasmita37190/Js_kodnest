const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.345
console.log(otherNumber.toPrecision(3));

//NOTE: toPrecision() is used when you want to format a number to a specific number of significant digits.
//  It returns a string representation of the number with the specified precision, rounding if necessary. The argument passed to toPrecision() determines the total number of significant digits in the resulting string.
const num = 1245.890
console.log(num.toPrecision(4))

// toString() is used when you want to convert a value into a string (text).
// toString() = convert something → String


const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));
//NOTE: toLocaleString() is used when you want to format a number according to a specific locale or region.
//  It converts the number into a string representation that is appropriate for the specified locale, including formatting options such as decimal
//  separators, thousands separators, and currency symbols.


//*************************************MATHS********************** */

// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 5, 6, 7, 8));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));


const min = 10;
const max = 20;
//Math.random() * (max- min + 1) + min

console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
//Note: The formula used here generates a random number between the specified min and max values, inclusive.
//  The expression (max - min + 1) calculates the range size, and adding min shifts the range to start from the desired minimum value. 
// Finally, Math.floor() is used to round down the generated random number to the nearest integer, ensuring that the final result is a whole number within the specified range.

//Note: math.random() generates a random number between 0 (inclusive) and 1 (exclusive). To scale it to a desired range, you multiply it by the range size and add the minimum value. The formula used here ensures that the random number falls between the specified min and max values, inclusive.
//Floor is used to round down the generated random number to the nearest integer, ensuring that the final result is a whole number within the specified range.
//Math.floor() rounds a number down to the nearest integer. It takes a single argument (the number to be rounded) and returns the largest integer less than or equal to that number. For example, Math.floor(4.9) would return 4, while Math.floor(-4.9) would return -5.