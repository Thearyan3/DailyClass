function Sum(){
let arr = [1, 2, 3, 4, 5, 6, 7];
let sum_Even = 0;
let sum_Odd = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        sum_Even += arr[i];
    }else{
        sum_Odd += arr[i];
    }
}
console.log(sum_Even, sum_Odd);
}
Sum();
