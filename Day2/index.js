// console.log("Hello World");
// var num = 52;
//  console.log(num);

//  var let and const
// (i). var - Variable(function or global scope variable)
var num = 52;
num = 50; //value can be reassigned
var num = 50; //value can be redeclared
console.log(num);
// In var, value can be reassigned and redeclared.
// It is used whenever you need a global or local variable.

// (ii). let - literal(block scope variable)
let num1 = 25;
num1 = 20;//value can be reassigned
// let num1 = 33; //value cannot be redeclared
console.log(num1);
// In let, value cannot be redeclared but can be reassgined.
// It is used mostly for temporary variables that you want to perish in a loop or function.

// (iii). const - constant(block-scoped variable)
const num2 = 33;
// const num2 = 225; value cannot be redeclared 
num2 = 245;
console.log(num2);