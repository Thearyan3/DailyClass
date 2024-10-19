// Increment and Decrement Operator 
// (i). Postfix Increment Operator 
// let num = 20;
// console.log(num++, num, num++);

// (ii). Prefix Increment Operator
// let num = 20;
// console.log(++num, num);

// (iii). Postfix Decrement Operator
// let num = 20;
// console.log(num--, num);

// (iv). Prefix Decrement Operator 
// let num = 20;
// console.log(--num, num--, num, num--, --num, num, num--);

// Logical Operators(&&, ||, !)
// var a = (3 > 2 && 1 < 2);
// var b = (3 > 2 || 5 < 2);
// console.log(a, b);
// console.log(!false);

// Ternary Operators 
// console.log((5 === 9) ? a : b)

// Exercise-1
// 1. Take two numbers and print the addition of that number. 
// let a = 2;
// let b = 5;
// let sum = a + b;
// console.log(sum);

// 2. Problem : Given a four-digit number N, print its first digit.
// let N = 4567;
// let result = N / 1000;
// console.log(result);

// Switch Statement ;
let Marks = prompt("Enter the Marks :");
switch(true){
    case (Marks <= 10): 
    console.log("Grade : E");
    break;
    case (Marks >= 11 && Marks <= 20): 
    console.log("Grade : D");
    break;
    case (Marks >= 21 && Marks <= 30): 
    console.log("Grade : C");
    break;
    case (Marks >= 31 && Marks <= 40): 
    console.log("Grade : B");
    break;
    case (Marks >= 41 && Marks <= 50): 
    console.log("Grade : A");
    break;
    default:
    console.log("Invalid Marks.");
    console.log("Please Enter the marks from 0 to 50");
        break;
}


