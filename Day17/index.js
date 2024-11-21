// function outer(length){
//     return function (breadth){
//             let area = length * breadth;
//             console.log(area);
//     }
// }
// const rectangle = outer(5);
// rectangle(8);

// const count = () => {
//     setTimeout(() => {
//         console.log("1");
//         setTimeout(() => {
//             console.log("2");
//             setTimeout(() => {
//                 console.log("3");
//                 setTimeout(() => {
//                     console.log("4");
//                     setTimeout(() => {
//                         console.log("5");
//                         setTimeout(() => {
//                             console.log("6");
//                             setTimeout(() => {
//                                 console.log("7")
//                             }, 7000);
//                         }, 6000);
//                     }, 5000);
//                 }, 4000);
//             }, 3000);
//         }, 2000);
//     }, 1000);
// };
// count();

const book = {
    title : "Javascript Topics",
    author : "Aryan", 
    year : 2024,
};
console.log(Object.keys(book));
console.log(Object.entries(book));
console.log(Object.values(book));