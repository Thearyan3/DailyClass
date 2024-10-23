// Question - Given a string, find out the number of vowels.
// let str = "Hello! , My Name Is Aryan Tanwar";
// let vowels = "aeiouAEIOU";
// let count = 0; 
// for(let i = 0; i < str.length; i++){
//   for(let j = 0; j < vowels.length; j++){
//     if(str[i] === vowels[j])
//    count++;
//   }
// }
// console.log(count);

// let nam = "aryan tanwar";
// let vowels1;
// for(let i of nam){
//     if((i === "a") || (i === "e") || (i === "i") || (i === "o") || (i === "u")){
//     vowels1 = i;
// }
// }
// console.log(vowels1);

// Question No. 2 - Given an arrya, find out total no. of odd and even nos. 

// let arr = [1, 5, 6, 3, 8, 9, 7, 2];
// let evenNo = 0;
// let oddNo = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         evenNo++;
//     }else{
//         oddNo++;
//     }
// }
// console.log("The total Number of even No. are : ", evenNo);
// console.log("The total Number of odd No. are : ", oddNo);

// Question No. 3 - Given an Array, find the number of 0's and 1's 
// let array = [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0];
// let Zero = 0;
// let One = 0;

// for(let i = 0; i < array.length; i++){
//         if(array[i] === 0){
//             Zero++;
//         }else{
//             One++;
//         }
// }
// console.log("The total No. of zero is : ", Zero);
// console.log("The total No. of One is : ", One);

// Above Question with for-of loop
let array = [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0];
let Zero = 0;
let One = 0;
for (a of array) {
    if (array[a] === 0) {
        Zero++;
    } else {
        One++;
    }
}
console.log("The total No. of zero is : ", Zero);
console.log("The total No. of One is : ", One);
