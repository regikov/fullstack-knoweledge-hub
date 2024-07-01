const array = [7, 9, 2, 6, 5, 4];

function mergeSort(array) {
    if (array.length <= 1) { // checks if the length of the array is 1 or less. 
        return array; // If true, it returns the array as it is already sorted.
    }

    const middle = Math.floor(array.length / 2); // Calculates the middle index of the array by dividing its length by 2 and rounding down to the nearest integer.
    const left = array.slice(0, middle); // Creates a new array left which contains the first half of the original array
    const right = array.slice(middle) // Creates the second half 

    return merge(mergeSort(left), mergeSort(right)); // recursively calls mergeSort on both left and right subarrays, and then merges the sorted subarrays using the merge function. The result of the merge is returned.
}

// merge([7], mergeSort(9,2)) = merge([7], [2,9])
// merge(mergeSort(9), mergeSort(2))
// merge([9], [2]) = [2,9]


function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0; 
    // initializes an empty array resultArray to hold the merged result, 
    // and two indices leftIndex and rightIndex, both set to 0, to keep track of the current positions in the left and right arrays.

    while (leftIndex < left.length && rightIndex < right.length) {
    // This starts a while loop that continues as long as both leftIndex is less than the length of left and rightIndex is less than the length of right.
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    /// compares the current elements of left and right. If the element in left is smaller, it is pushed to resultArray and leftIndex is incremented.
    //  Otherwise, the element in right is pushed to resultArray and rightIndex is incremented.
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    // After exiting the loop, this line concatenates any remaining elements from left and right 
    //(those elements that haven't been processed yet) to resultArray, and returns the merged array.
}


// Recursion 
/* ● Step 1: Identify the base case. What condition will stop the recursion?
Javascript. Hint → use ‘return;’ to stop the recursion.
● Step 2: Write the recursive call. How can the function call itself to move towards
the base case?
● Step 3: Add the action (logging the number) before making the recursive call. */ 

function countDown(num) {

    if (num < 0) {
        return;
    }

    console.log(num);
    countDown(num - 1);
}

countDown(6); 
