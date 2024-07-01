// // METHOd 1
// const originalArray = [54, 34, 25, 12, 22, 11, 90];
// const originalArrayDisplay = document.getElementById("original-array");
// const sortedArrayDisplay = document.getElementById("sorted-array"); // Corrected the typo here

// originalArrayDisplay.textContent = originalArray.join(",");

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Corrected the swapping syntax
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

function sort() {
    const sortedArray = bubbleSort(originalArray.slice());
    sortedArrayDisplay.textContent = sortedArray.join(",");
}

// Pair Programming

/* Task 2
Task 2: Simple Bubble Sort (Descending Order)
● Objective: Write a function to sort an array of integers in descending order
using the bubble sort algorithm.
○ Descending order: Largest to smallest
● Function Signature: function bubbleSortDescending(arr)
● Parameters: arr - An array of integers.
● Return: The array sorted in descending order.
● Example: For an input array [5, 3, 8, 4, 2], bubbleSortDescending([5,
3, 8, 4, 2]) should return [8, 5, 4, 3, 2].
Instructions:
● Start by discussing the modifications needed to sort in descending order.
● Implement the algorithm step by step, with the driver typing and the navigator
guiding.
● Test your function with different arrays to ensure it works correctly.
● Rotate roles after 15 minutes.*/

// function bubbleSortDescending(array) {
//     for (let i= 0; i < array.length - 1; i++ ) {
//         for (let j=0; j< array.length -1 -i; j++ ) {
//             if (array[j] < array[j+1]) {
//                 let temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1]= temp

//             }
//         }
//     }
//     return array
// }

// console.log(bubbleSortDescending([5,3,8,4,2]));

function bubbleSortDescending(array) {
  let swap
  do {
    swap = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) { 
         [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true;
        console.log(array);
      }
    }
  } while (swap)
    return array
}


bubbleSortDescending([5,3,8,4,2,9]);



// TASK 1 

function bubbleSortAscendingWithMinusOne(arr) {
  for (let i = 0; i < arr.length; i++) { // Outer loop
      for (let j = 0; j < arr.length - 1 - i; j++) { // Inner loop with -1 - i
          if (arr[j] > arr[j + 1]) { // Swap if the element found is greater than the next element
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}