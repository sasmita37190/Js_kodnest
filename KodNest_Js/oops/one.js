// Creating an obj in JS

const car = {
    brand: "Tesla",
    color: "Red",
    start: function() {
        console.log("The car is startinf")
    }
}

// start → property name
// function() {...} → property value

//When a function is stored inside an object property, we commonly call that property a method.

// So:

// start: function() {
//     ...
// } - is a meethod


class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    start() {
        console.log(this.brand + "IS starting..." );
    }
}


//Creating obj

const car1 = new Car("Tesla", "Red");
const car2 = new Car("Honda", "blue");

console.log(car1.brand);
console.log(car2.color);
car1.start();

//COnstructor in JS

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        const Person1 = new Person("Alice", 21);

        console.log(Person1.name);
        console.log(Person1.age);
    }
}


//Dont define a constructor


class Empty {
    //no constructor defined - js automatically provide default constructor 

}

const obj = new Empty();
console.log(obj);



// Parameterized Constrictor


class CarP {
    constructor(brand, color) {
        this.brand = b
        rand;
        this.color = color;
    }
}
const car1 = new CarP("Honda", "blue");

console.log(car1.brand);
console.log(car2.color);