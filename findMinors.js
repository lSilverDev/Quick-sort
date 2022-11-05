const listBooks = require("./bookstore");

function findMinors(pivot, arr){
    let minors = 0;
    
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];

        if(current.price < pivot.price){
            minors++;
        }
    }

    switchPosition(arr, arr.indexOf(pivot), minors);
    return arr;
}

function switchPosition(arr, from, to){
    let elemOut = arr[from];
    let elemIn = arr[to];

    arr[to] = elemOut;
    arr[from] = elemIn;
}

function dividePivot(arr){
    let pivot = arr[Math.floor(arr.length / 2)];
    findMinors(pivot, arr);
    let minorsValue = 0;

    for(let i = 0; i < arr.length; i++){
        let current = arr[i];

        if(current.price <= pivot.price && current !== pivot){
            switchPosition(arr, i, minorsValue);
            minorsValue++;
        }
    }

    return pivot;
} 

module.exports = switchPosition;