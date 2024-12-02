// OOP = Object Oriented Programming
// Classes and Object = A class is a blueprint for creating the objects. It defines properties and methods.
// Object = An object is an instance of a class and can hold the data(properties and methods).

// Classes 
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log(`Car : ${this.make} ${this.model}`);
    }
}

const MyCar = new Car("Toyota", "Corolla");
MyCar.displayInfo();


// 2. Encapsulation 
