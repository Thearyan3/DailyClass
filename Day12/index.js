// Question No. 1 
// let num = [2, 45, 67, 567, 34, 345, 123];
// let largest = num[0];
// for(let i = 0; i < num.length; i++){
//     if(num[i] > largest){
//         largest = num[i];
//     }
// }
// console.log("The largest number in the array is : ", largest);

// // Question No. 2 
// let arr = [[1, 2], [3, 4], [5, 6]];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//             console.log(arr[i][j]);
//     }
// }


// Question No. 3
// let arr1 = [-3, 4, 5, 8, 7, 9, 1, 2];
// let arr2 = arr1.sort();
// console.log(arr2);

// Question No. 4
let dupl = [4, 2, 3, 34, 4, 1, 12];
let duplicates = [];

for(let i = 0; i < dupl.length; i++){
    for(let j = i + 1; j < dupl.length; j++ ){

        if((dupl[i] === dupl[j]) && (!duplicates.includes(dupl[i]))){
                duplicates.push(dupl[i]);
        }

    }
}
console.log(duplicates)