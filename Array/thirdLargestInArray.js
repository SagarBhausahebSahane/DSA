// Normal case
// const arr = [10, 20, 30, 40];

// const arr = [5, 1, 9, 3, 7];

const arr = [-10, -20, -30, -5];

// const arr = [4, 1, 9, 2, 8];

// const arr = [Number.MAX_SAFE_INTEGER, 1, 999999];

// Exactly two elements
// const arr = [10, 5];

// const arr = [10, 10, 5];

// const arr = [5, 10, 10];

// const arr = [7, 7, 7, 7];

// const arr = [0, 5, 3];

// const arr = [0, -1, -2];

// const arr = 10;

// const arr = {};

// const arr = null;

// const arr = [];

// const arr = [5];

// const arr = [1, "2", 3];

// const arr = [true, 2, 3];

// const arr = [1, NaN, 3];

// const arr = [1, , 3];

// const arr = [100, 20, 30, 40];

// const arr = [10, 20, 30, 100];

// const arr = [10, 8, 8, 5];

function thirdLargestInArray(arr){

    if(!Array.isArray(arr)) return "Please Provide Valid Array !";

    if(arr.length < 3) return "Array Should Contains at least 3 elements !";

    let firstLargest  = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest  = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i] ) !='number' || Number.isNaN(arr[i])){
            return "Array Should Only Contains Numbers";
        }

        if(arr[i]>firstLargest){
            thirdLargest =  secondLargest;
            secondLargest =  firstLargest;
            firstLargest= arr[i];
        }else if(arr[i]  > secondLargest && arr[i] != firstLargest ){
            thirdLargest =  secondLargest;
            secondLargest = arr[i];
        }else if(arr[i] > thirdLargest && arr[i] != secondLargest){
            thirdLargest = arr[i];
        }
    }

    if(thirdLargest===-Infinity){
        return "Not Any Third Largest Number In An Array";
    }

    return thirdLargest;

}



console.log(thirdLargestInArray(arr));
