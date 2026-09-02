const user = {
    username: "hitesh",
    loginCount: 8,
    signesIn: true,

    getUserDetails: function() {
        //console.log("Got user detaails from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.loginCount);
// console.log(user.signesIn);



//================================
//constructor func tion : A constructor function allows us to create objects using a common template.
//==============================================================

//ex-1

// let student1 = {
//     name: "Sasmita",
//     age: 25
// };

// let student2 = {
//     name: "Rahul",
//     age: 24
// };

// let student3 = {
//     name: "Priya",
//     age: 23
// };


//constructor function is simply a normal JavaScript function that is used to create multiple objects.

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student1 = new Student("Sasmita", 25);
let student2 = new Student("Subrat", 24);
let student3 = new Student("Priya", 23);

console.log(student1);
console.log(student2);
console.log(student3);


//this means: the current object
//new means : the new keyword is used to create a new object from a constructor function.


//7. Constructor with a Method




function Student5(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log("My name is " + this.name);
    };
}

let student7 = new Student5("Sasmita", 25);

student7.introduce();









//Ex-2


console.log(user.username);
console.log(user.getUserDetails);


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`welcome ${this.username}`)
    }

    return this
}

const userOne =  new User("hitesh", 12, true)
const userTwo = new User("sasmita", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);
