class Animal {
    constructor(name) {
        this.name = name;

    }


eat() {
    console.log(`${this.name} is eating`);
}
}

//child class

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}

//create object
const  animal = new Animal("Generic Animal");
animal.eat();

const dog = new Dog("Buddy")
dog.eat();
dog.bark();


//Method Overriding



class Animals {
    constructor(name) {
        this.name = name;

    }


sound() {
    console.log(`${this.name} makess sound`);
}
}

class Dogs extends Animals {
    sound() {
        console.log(`${this.name} is barking`);
    }
}


const genericAnimal = new Animals("Generic ANimal");
genericAnimal.sound();

const dogs = new Dogs("Buddy");
dogs.sound();


// Parent class

class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
display() {
console.log(`${this.name} costs $$(this.price).`);

}
}

// Child class

class Book extends Product {
constructor(name, price, author) {
super(name, price); // Call the parent class's constructor
this.author = author; // Add a new property
}

display() {
super.display(); // Call the parent method
console.log("Written by ${this.author}.");
}
}

// Create objects

const product = new Product("Laptop", 1200);
 product.display(); // Output: Laptop costs $1200.

const book = new Book("JavaScript Basics", 25, "John Doe");
book.display();

//Output:

// JavaScript Basics costs $25.

// Written by John Doe.



