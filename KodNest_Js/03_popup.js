//alert() in JavaScript is used to show a message in a popup box to the usealert()

// alert()    
// confirm() :ASK YES OR NO 
// // prompt()


////alert() gives you no choice.The user can only click OK.


//confirm () Used when you want the user to confirm an action.

let result = confirm("Do you want to delete this file?");

console.log(result);



let answer = confirm("Are you 18 or older?");

if (answer) {
    alert("You can continue.");
} else {
    alert("You cannot continue.");



    //3. prompt() — Get input from user

//prompt() is used when you want the user to enter some information.

let name = prompt("What is your name?");

alert("Hello " + name);
}






// | Function    | Purpose          | Returns          |
// | ----------- | ---------------- | ---------------- |
// | `alert()`   | Show message     | `undefined`      |
// | `confirm()` | Ask confirmation | `true` / `false` |
// | `prompt()`  | Ask for input    | String / `null`  |
