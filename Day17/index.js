// function outer(length){
//     return function (breadth){
//             let area = length * breadth;
//             console.log(area);
//     }
// }
// const rectangle = outer(5);
// rectangle(8);

function first(){
    setTimeout(first, 1000);
    console.log("1");
    return function (){
        setTimeout(2000)
        console.log("2");
        return function (){
            setTimeout(3000)
            console.log("3");
            return function (){
                setTimeout(4000)
                console.log("4");
                return function (){
                    setTimeout(5000)
                    console.log("5");
                    return function (){
                        setTimeout(6000)
                        console.log("6");
                        return function (){
                            setTimeout(7000)
                            console.log("7");
                        }
                    }
                }
            }
        }
    }
}
first();