// Object Destructing 

// 1. Basic Object destructing 
// const person = {
//     name : "Aryan", 
//     age : 20, 
//     city : "Noida"
// }

// const {name, age, city} = person;
// console.log(name);
// console.log(age);
// console.log(city);

// 2. Destructing with the Variables
// const person1 = {
//      name : "Navya",
//      age : 20,
//      city : "Meerut"
// }

// const {name : FullName, age: YearsOld, city : location} = person1;
// console.log(FullName);
// console.log(YearsOld);
// console.log(location);

// 3. Destructing with the default values 
// const person2 = {
//     name : "Keshav", 
//     age : 20,
// }

// const {name, age, city = "Dwarka"} = person2;
// console.log(name);
// console.log(age);
// console.log(city);

// 4.Destructing Nested Objects 
// const person3 = {
//     name : "Prashant", 
//     age : 20, 
//     address : {
//         city : "Meerut",
//         ZipCode : 250001,
//     }
// }

// const {name, age, address: {city, ZipCode}} = person3;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(ZipCode);


// 5. Destructing with the Array
const numbers = [1, 2, 3, 4];
const [first, second, third, fourth] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
