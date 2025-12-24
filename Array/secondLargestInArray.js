
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

function secondLargestInArray(arr){
    if(!Array.isArray(arr)) return "Please Provide Valid Array"
    const arrayLength =  arr.length;

    if(arrayLength < 2) return "Please provide a valid array at least 2 element"
    let firstLargestNumber = -Infinity;
    let secondLargestNumber = -Infinity;

    for(let i=0;i<arrayLength;i++){

        if(typeof(arr[i])!="number" || Number.isNaN(arr[i])) return "Array Should Contains Only Number!"

        if(arr[i] > firstLargestNumber){
            secondLargestNumber =  firstLargestNumber;
            firstLargestNumber =  arr[i];
        }else if(arr[i] > secondLargestNumber && arr[i] != firstLargestNumber){
            secondLargestNumber =  arr[i];
        }


    }

     if (secondLargestNumber === -Infinity) {
        return "No second largest element found";
    }
    return secondLargestNumber;
}

console.log(secondLargestInArray(arr));
