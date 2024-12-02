// OOP = Object Oriented Programming
// Classes and Object = A class is a blueprint for creating the objects. It defines properties and methods.
// Object = An object is an instance of a class and can hold the data(properties and methods).

// Classes 
// class Car{
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }
//     displayInfo() {
//         console.log(`Car : ${this.make} ${this.model}`);
//     }
// }

// const MyCar = new Car("Toyota", "Corolla");
// MyCar.displayInfo();


// 2. Encapsulation - It refers to binding the data(properties) and methods that operate on the data within one unit(object).

// class BankAccount{
//     #balance;
//     constructor(owner, initialBalance){
//         this.owner = owner;
//         this.#balance = initialBalance;
//     }
//     deposit(amount){
//         if(amount > 0){
//         this.#balance += amount;
//     }
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }

// const myAccount = new BankAccount("Aryan", 20000);
// myAccount.deposit(200);
// console.log(myAccount);


//Inheritance = It allows one class to inherit properties and methods from the another class.

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${name} makes a noise`);
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed;
    }
    speak(){
        console.log(`${this.name} barks`)
    }
}

const dog = new Dog('Labrador', 'Pitbull');
dog.speak();