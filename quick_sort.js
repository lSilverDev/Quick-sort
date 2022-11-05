const listBooks = require("./bookstore");

function findMinors(pivo, arr){
    let minors = 0;
    
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        console.log(current);
        console.log(pivo);
        if(current.price < pivo.price){
            minors++;
        }
    }

    return minors;
}

console.log(findMinors(listBooks[2], listBooks));