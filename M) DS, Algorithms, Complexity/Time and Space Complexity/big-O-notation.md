## What is Big O?
Big O is short for Big O Notiation.

Big O is how programmers talk about scalability of algorithms.

An algorithm's Big O Notation is determined by how long the algorithm takes to return output in the **worst case scenario.**

The math term for the worst case scenario is "upper bound".

### **How do you say O(n)?**
O(n) reads as "Order of N" or short for "O of N".

The O function is the Order function.

### **Why is it called Big O?**
Because we're dealing with orders of magnitude. O is used because the growth rate of a function is also referred to as the "order of the function".

### **Why is Big O important?**
Understanding the Big O of algorithms will:

- get you into the mindset of coding for efficiency. Ex: "I have to change this algorithm because it's O(n!)!"

- help you talk code to other developers. Ex: "Don't worry, I changed up the algorithm so it not O(n^2). It's O(n) now."

- help you for interviews. You will be able to talk about efficiency of algorithms that you whiteboard. Ex: "What I just coded out is O(n^2)."

&nbsp;

![BigOGraphs](https://miro.medium.com/v2/resize:fit:1358/1*dWet_YU-5072Kcko7LzsuQ.jpeg)

### O(1) - (Constant Time.) 
An operation that always takes the same amount of time to complete, no matter how big the input is. 

For example, looking up a specific element in an array by its index is a constant-time operation because it takes the same amount of time no matter how many elements are in the array.

```javascript
function getFirstElement(arr) {
  return arr[0]; // Always takes the same time, regardless of array size.
}
```

### O(n) - Linear Time
An operation where the time it takes to complete grows directly in proportion to the size of the input. 

For instance, summing all the numbers in an array requires looking at each number once, so the time needed grows with the number of elements in the array.

```javascript 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { // Loop runs once for each element in the array.
    sum += arr[i];
  }
  return sum;
}
```

### O(n^2) - Quadratic Time
An operation where the time it takes to complete is proportional to the square of the size of the input. 

This often happens with nested loops, where each loop runs n times.

```javascript 
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) { // Outer loop runs n times.
    for (let j = 0; j < arr.length; j++) { // Inner loop also runs n times for each iteration of the outer loop.
      console.log(arr[i], arr[j]); // Prints each pair of elements.
    }
  }
}
```

### O(log n) - Logarithmic Time
An operation where the time it takes to complete grows logarithmically as the size of the input grows. 

This is common in operations that repeatedly divide the problem in half, like binary search.

```javascript 
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Finds the middle index.
    
    if (arr[mid] === target) {
      return mid; // Found the target.
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half.
    } else {
      right = mid - 1; // Search in the left half.
    }
  }
  
  return -1; // Target not found.
}
```

### O(n log n) - Linearithmic Time
An operation where the time it takes grows in a combination of linear and logarithmic time, often seen in efficient sorting algorithms like Merge Sort.

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: single element or empty array.
  }
  
  const mid = Math.floor(arr.length / 2); // Finds the middle index.
  const left = mergeSort(arr.slice(0, mid)); // Recursively sorts the left half.
  const right = mergeSort(arr.slice(mid)); // Recursively sorts the right half.
  
  return merge(left, right); // Merges the sorted halves.
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

### O(2^n) - Exponential Time
An operation where the time it takes to complete doubles with each additional element in the input. 

This is typical in algorithms that solve problems by exploring all possible solutions, like the recursive Fibonacci sequence.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n; // Base cases: fibonacci(0) = 0, fibonacci(1) = 1.
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive calls.
}
```

### O(n!) - Factorial Time
An operation where the time it takes to complete grows factorially with the input size. This is often seen in problems that involve generating all permutations of a set.

```javascript
function getPermutations(arr) {
  if (arr.length === 0) return [[]]; // Base case: empty array has one permutation, an empty array.
  
  const firstElem = arr[0];
  const rest = arr.slice(1); // Remaining elements.
  
  const permsWithoutFirst = getPermutations(rest); // Permutations of the rest.
  const allPermutations = [];
  
  permsWithoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstElem, ...perm.slice(i)];
      allPermutations.push(permWithFirst); // Insert firstElem into each possible position.
    }
  });
  
  return allPermutations;
}
```

![BigOGraphs](https://miro.medium.com/v2/resize:fit:1192/format:webp/0*KLKs3NZVQZzBUI5v.png)
