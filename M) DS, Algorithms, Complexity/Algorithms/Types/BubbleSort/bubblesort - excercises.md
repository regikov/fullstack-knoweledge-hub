## Exercise 1: Implementing Bubble Sort and Displaying Results
### **Objective:**

Write a JavaScript program that sorts an array of numbers using the Bubble Sort algorithm and displays both the original and sorted arrays in an HTML document.

### **Instructions:**

**1. Set Up HTML:**

Create an HTML file with two elements to display the original and sorted arrays.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Bubble Sort Example</title>
</head>
<body>
    <h2>Original Array:</h2>
    <p id="original-array"></p>

    <h2>Sorted Array:</h2>
    <p id="sorted-array"></p>

    <button onclick="sort()">Sort Array</button>

    <script src="script.js"></script>
</body>
</html>

```

**2. JavaScript Implementation:**

Write a JavaScript file (script.js) to handle the sorting and display of the arrays.
Define the Original Array:

&nbsp;

**3. Create an array of numbers to be sorted.**

```javascript 
const originalArray = [54, 34, 25, 12, 22, 11, 90];
```

&nbsp;

**4. Display the Original Array:**

Use JavaScript to display the original array in the HTML document.

```javascript 
const originalArrayDisplay = document.getElementById("original-array");
originalArrayDisplay.textContent = originalArray.join(",");

```
&nbsp;

**5. Implement Bubble Sort:**

Write a function that implements the Bubble Sort algorithm to sort the array.

```javascript 
const sortedArrayDisplay = document.getElementById("sorted-array");

function sort() {
    const sortedArray = bubbleSort(originalArray.slice()); // Use a copy of the original array
    sortedArrayDisplay.textContent = sortedArray.join(",");
}
```

&nbsp;

**6. Add a Button:**

Add a button in the HTML file that calls the sort function when clicked.

&nbsp;

### Explanation: Breaking Down the bubbleSort function 

```javascript 
function bubbleSort(array) {
    let swapped;
```

Line 1: This line defines a function named bubbleSort. A function is a block of code that performs a specific task. This function takes one input called array, which is the list of numbers we want to sort.

Line 2: We create a variable named **swapped.** This variable will help us keep track of whether we swapped any numbers during our sorting process.

```javascript 
    do {
        swapped = false;
```
Line 3: We start a *do...while* loop. A do...while loop will always execute the code inside it at least once before checking if it should continue looping.

Line 4: At the beginning of each loop, we set swapped to false. This means we assume no numbers will be swapped unless we find out otherwise.


```javascript 
        for (let i = 0; i < array.length - 1; i++) {
```
Line 5: We start a for loop, which will go through each pair of numbers in the array. 

The for loop uses a variable *i* to keep track of our current position in the array, starting from 0 up to the second-to-last position in the array. We stop at the second-to-last position because we'll be comparing each number to the one right after it.


```javascript 
            if (array[i] > array[i + 1]) {
```
Line 6: Inside the for loop, we use an if statement to check if the current number (array[i]) is greater than the next number (array[i + 1]). 

If it is, it means these two numbers are in the wrong order and need to be swapped.


```javascript 
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
```

Line 7: Swaps the elements array[i] and array[i + 1] using **array destructuring.** This is a concise way to swap two variables without needing a temporary variable.

```javascript 
                swapped = true;
            }
        }
```
Line 8: Sets swapped to true, indicating that a swap has occurred. 

This means another pass through the array will be necessary to check for any remaining unsorted elements.

```javascript 
    } while (swapped);
    return array;
}
```
Line 11: Continues the do loop as long as swapped is true. If no swaps occurred during a pass through the array, swapped remains false, and the loop terminates.

Line 12: Returns the sorted array after the do loop has finished executing.


---------------------------------------------------

## Exercise 2: 
```javascript 
```


```javascript 
```
