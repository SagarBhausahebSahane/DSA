
const arr = [1, 5, 3, 9, 2];

// const arr = [10];

// const arr = [-5, -1, -10];

// const arr = [];

// const arr = [0, -0, 0];

// const arr = [Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER];

// const arr = 2;

// const arr = null;

// const arr = undefined;

// const arr = {};

// const arr = ["1", 2, 3];

// const arr = [1, NaN, 3];

// const arr = [ , , 5];


function largestNumberInArray(arr) {
    if (!Array.isArray(arr))  return "Please provide a valid array";

    if (arr.length === 0) return "Please provide a valid array at least one element";

    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || Number.isNaN(arr[i]))  return "Array should contain only valid numbers";
        if (arr[i] > largest)  largest = arr[i];

    }

    return largest;
}


console.log(largestNumberInArray(arr));
