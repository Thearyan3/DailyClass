// Loops 
// (i). for loop
// const n = 5;
// for(let i = 1; i <= n; i++){
//     console.log("I am a programmer");
// }

// Question - Write a program which takes a number from user and print the table. 
// for(let i = 1; i <= 10; i++){
//     // console.log(`3 * ${i} = ${3 * i}`);
//     console.log("3" + " " + "*" + " " + i + " " + "=" + " " + 3 * i);
// }

// (ii). for-in loop
// const student = {
//     name : "Monica",
//     class : 7,
//     age : 12
// }
// for(let key in student){
// console.log(`${key} : ${student[key]}`);
// }

// Print a pattern 
for(let i = 1; i <= 8; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += j ; // or pattern += j + "";
    }
    console.log(pattern);
}


