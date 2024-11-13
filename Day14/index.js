// Function with params.

// function Add(num1, num2){
//     let res = num1 + num2;
//     return res;
// }
// const res1 = Add(2, 4);
// console.log(res1);

// function Mul(A , N){
//     let mult = A * N;
//     return mult;
// }
// var R = Mul(20, 16);
// console.log(R);

//Creating an object using Map(). Usually used for APIs.
// let map1 = new Map();

// // set Method in Map() - defines the key for the value.
// map1.set("name", "Aryan");
// map1.set("Contact No.", 83928748483);
// map1.set("age", 20);
// map1.set(1, "one");
// console.log(map1);

// // get Method in Map() - prints the value of the particular key.
// console.log(map1.get(1));
// console.log(map1.get("name"));

// // has Method in Map() - checks a particular key presents in an object or not.
// console.log(map1.has("name"));

// // delete Method in Map() - deletes a particular key in object.
// console.log(map1.delete("name"));
// console.log(map1.get("name"));

// // clear Method in Map() - deletes the entire object at once.
// console.log(map1.clear());
// console.log(map1);



// Creating an object using Set(). 
let set1 = new Set();

// add Method in Set() - adds a value directly to the object.
set1.add("apple");
set1.add("Banana");
set1.add("Mango");
console.log(set1);

// values method in Set() - prints the entire values of the Set() object.
console.log(set1.values());

// has method in Set() - check whether a particular value exists inside the Set() object or not.
console.log(set1.has("kiwi"));

// delete method in Set() - deletes a particular value from the Set() object.
console.log(set1.delete("apple"));
console.log(set1);

// entries method is Set() - returns the key value pair of the object where value is used as a key.
console.log(set1.entries());