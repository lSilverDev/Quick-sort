const listBooks = require("./bookstore");
const switchPosition = require("./findMinors");

function quickSort(arr, indexStart, indexEnd){

    if(arr.length > 1){
        let currentIndex = partition(arr, indexStart, indexEnd);

        if(indexStart < currentIndex - 1){
            quickSort(arr, indexStart, currentIndex - 1);
        }
        if(currentIndex < indexEnd){
            quickSort(arr, currentIndex, indexEnd);
        }
    }

    return arr;
}

function partition(arr, indexStart, indexEnd){
    let pivot = arr[Math.floor((indexStart + indexEnd) / 2)];
    let currentleft = indexStart; // 0
    let currentRight = indexEnd; //array.lenght

    while(currentleft <= currentRight){
        while(arr[currentleft].price < pivot.price){
            currentleft++;
        }

        while(arr[currentRight].price > pivot.price){
            currentRight--;
        }

        if(currentleft<= currentRight){
            switchPosition(arr, currentleft, currentRight);
            currentleft++;
            currentRight--;
        }
    }

    return currentleft;
}

console.log(quickSort(listBooks, 0, listBooks.length-1));