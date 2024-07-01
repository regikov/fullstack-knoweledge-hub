// Task 1 
/* Simple Selection Sort (Ascending Order)
Objective: Write a function to sort an array of integers in ascending order using the
selection sort algorithm.
Instructions:
1. Function Signature: function selectionSortAscending(arr)
2. Parameters:
○ arr - An array of integers.
3. Return:
○ The array sorted in ascending order.
Example:
For an input array [64, 25, 12, 22, 11]:
selectionSortAscending([64, 25, 12, 22, 11]) should return [11, 12,
22, 25, 64].*/ 

const exampleArray = [64,25,12,22,11]
// ITERATIONS: 11, | 25,12,22,64
//          11,12 | 25,22,64 
//          11,12,22 | 25,64
//          11, 12, 22, 25, 64 (no swap=)   

function selectionSortAscending(array) {
    for (let i=0; i<array.length - 1; i++) { // starting with first element 64
        let minIndex = i; 
        for (let j= i +1; j< array.length; j++) {
            if (array [j] < array[minIndex]) {
                minIndex = j // finsing the smallest element 11
            }
        }
    [array [i], array [minIndex]] = [array[minIndex], array [i]] // swaping 61 with 11 etc..
    }
    return array 
}

console.log(selectionSortAscending(exampleArray))


// TASK 2 

const exampleArray2 = [64,25,12,22,11]
function selectionSortDescending(array) {
    for (let i=0; i<array.length - 1; i++) { // starting with first element 64
        let minIndex = i; 
        for (let j= i +1; j< array.length; j++) {
            if (array [j] > array[minIndex]) {
                minIndex = j // finsing the smallest element 11
            }
        }
    [array [i], array [minIndex]] = [array[minIndex], array [i]] // swaping 61 with 11 etc..
    }
    return array 
}

console.log(selectionSortDescending(exampleArray2))


// TASK 3 

const exampleArray3 = [64,25,12,22,11]
// SWAPPED: 11, | 25,12,22,64
//          11,12 | 25,22,64 
//          11,12,22 | 25,64
//          11, 12, 22, 25, 64 (no swap=)   

function selectionSortWithCount(array) {
    let iteration = 0
    for (let i=0; i<array.length - 1; i++) { // starting with first element 64
        let minIndex = i; 
        for (let j= i +1; j< array.length; j++) {
            if (array [j] < array[minIndex]) {
                minIndex = j // finsing the smallest element 11
            }
        }
    [array [i], array [minIndex]] = [array[minIndex], array [i]] // swaping 61 with 11 etc..
    iteration++
    }
    return `The sorted array is: [${array}] with ${iteration} number of iteration`
}

console.log(selectionSortWithCount(exampleArray3))

