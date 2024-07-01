// TASK 2 
/*  Swap Two Numbers in an Array
Objective: Write a function to swap two numbers in a two-element array in ascending
order and then in descending order.
Instructions:
1. Function Signature: function swapInAscending(arr) and function
swapInDescending(arr)
2. Parameters:
○ arr - A two-element array of integers.
3. Return:
○ An array with the two numbers swapped in ascending or descending
order. */ 

function swapInAscending(array) {
    if (array.length !== 2) {
        console.log("Can't be more/less than 2 elements in the array")
    }
    if (array[0] > array [1]){
        return [array[1], array[0]]
    } else {
        return array
    }
} 

function swapInDescending(array) {
    if (array.length !== 2) {
        console.log("Can't be more/less than 2 element in the array")
    }
    if (array [0] < array [1]){
        return [array [1], array [0]] 
    } else {
        return array
    }
} 

console.log(swapInAscending([7,28]))
console.log(swapInAscending([28,7]))
swapInAscending([7])
swapInAscending([7,28,96])

console.log(swapInDescending([7, 28]))
console.log(swapInDescending([28,7]))
swapInDescending([7])

// TASK 3 
/* 
Task 3: Sort a Three-Element Array
Objective: Write a function to sort a three-element array in ascending order. For now
we will branch if statements instead of using for loop.
Instructions:
1. Function Signature: function sortThreeElements(arr)
2. Parameters:
○ arr - A three-element array of integers.
3. Return:
○ An array with the three elements sorted in ascending order.

Example:
For an input array [9, 4, 7]:
● sortThreeElements([9, 4, 7]) should return [4, 7, 9].
Step-by-Step Guidance:
1. Compare the elements and swap them if they are in the wrong order.
2. Repeat the comparisons until all elements are in ascending order. */ 

function sortThreeElements(array) {
    if (array.length !== 3) {
       console.log('Array must contain exactly three elements');
    }

    let a = array[0];
    let b = array[1];
    let c = array[2];

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    if (b > c) {
        let temp = b;
        b = c;
        c = temp;
    }
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    return [a, b, c];
}


// OR  EASY WAY 
function sortThreeElements(array) {
    if (array.length !== 3) {
        console.log("Error");;
    }
    return array.sort((a, b) => a - b);
}

console.log(sortThreeElements([19, 17, 10]))

