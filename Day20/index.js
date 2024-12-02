// //Polymorphism = It allows objects of different classes to be treated as instances of the same class through a common interface.

// class Animal{
//     speak(){
//         console.log('Animal makes a noise');
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log('Dog barks');
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log('Cat Meows');
//     }
// }

// const animals = [new Dog(), new Cat()];
// animals.forEach((animal) => animal.speak());

// //Abstraction = It is a concept of hiding complex inmplementation details and exposing only the necessary parts of an object.

// class Calculator{
//     constructor(){
//         this.result = 0;
//     }
//     add(a, b){
//         this.result = a + b;
//         return this.result;
//     }
//     subtraction(a, b){
//         this.result = a - b;
//         return this.result;
//     }
// }

// const Calc = new Calculator();
// console.log(Calc.add(5, 3));
// console.log(Calc.subtraction(16, 2));

//Promise = A Promise in JS is a special object that helps to handle the asynchronous operations, 
//such as 1). When we are fetching the data from the server, reading files, waiting for a timer to finish.

//1. Promises represents an operation that has not completed  yet but will eventually resolve to a value or fail with an error. There are the states in Promise : 
//(i). Pending = still working on.
//(ii). Fullfilled = successful.
//(iii). Rejected = get issues and failure.

//How can we create Promise :

let myPromise = new Promise(function(resolve, reject){
    let success = true;
    if(success){
        resolve('Data Delievered');
    }
    else{
        reject("Rejection to fetching Data");
    }
});
console.log(myPromise);

//How can we use the Promises - There are several methods to use Promises like 
// .then = It is used to handle the successful Result when the Promises are fullfilled, 
// .catch = It is used to handle any errors when the Promise is rejected. 

myPromise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});



//Async and Await
// Await = The await is a keyword pause the code until the promise is either fullfilled or rejected.

async function deliverData(params){
    try{
        let result = await myPromise;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
deliverData();