// console.log("Hello World");
// var num = 52;
//  console.log(num);

//  var let and const
// (i). var - Variable
var num = 52;
num = 50; //value can be reassigned
var num = 50; //value can be redeclared
console.log(num);
// In var, value can be reassigned and redeclared. 

// (ii). let - literal.
let num1 = 25;
num1 = 20;//value can be reassigned
// let num1 = 33; //value cannot be redeclared
console.log(num1);
// In let, value cannot be redeclared but can be reassgined.

// (iii). const - constant
const num2 = 225;
// const num2 = 225; value cannot be redeclared (block-scoped variable)
num2 = 245;
console.log(num2);