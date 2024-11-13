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
let map1 = new Map();
map1.set("name", "Aryan");
map1.set("Contact No.", 83928748483);
map1.set("age", 20);
map1.set(1, "one");
console.log(map1);
console.log(map1.get(1));
console.log(map1.get("name"));