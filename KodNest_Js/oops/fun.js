

// Normal function


function start() {
    console.log("Starting");
}



// Function stored as an object property

const car = {
    start: function() {
        console.log("Starting");
    }
};

// This is a method of car.

// Modern method syntax

const car = {
    start() {
        console.log("Starting");
    }
};

//a method of car.












// An object contains properties.

// A property can contain different types of values:

const car = {
    brand: "Tesla",       // property → string
    color: "Red",         // property → string
    price: 50000,         // property → number


    start: function() {   // property → function
        console.log("Starting");
    }
};

// When the property value is a function, we normally call it a method.

// Object
//   |
//   ├── brand → "Tesla"       → property
//   ├── color → "Red"         → property
//   └── start → function      → method

// And we call the method using:car.start();

//o the main idea is: start: is there because start is the name of a property inside the car object, and its value is a function.