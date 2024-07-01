## Searching Algorithms in JS

### 1. Linear Search
Linear Search is the simplest search algorithm. 

It checks each element of the array one by one until it finds the target value or reaches the end of the array.

**How Linear Search Works:**

1. Start at the beginning of the array.

2. Compare the target value with the current element.

3. If the current element is the target value, return its index.

4. If the current element is not the target value, move to the next element.

5. Repeat steps 2-4 until the target value is found or the end of the array is reached.

&nbsp;

**Example:** 

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const array = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(array, target);

console.log(result); // Output: 2 (index of target value 30 in the array)
```


### 2. Binary Search
Binary Search is a more efficient search algorithm but it requires the **array to be sorted.**

It <span style="color:orange">repeatedly divides the array in half</span> to find the target value.

**How Binary Search Works:**

1. Start with the middle element of the array.

2. Compare the middle element with the target value.

3. If the middle element is the target value, return its index.

4. If the target value is less than the middle element, repeat the process on the left half of the array.

5. If the target value is greater than the middle element, repeat the process on the right half of the array.

6. Repeat steps 1-5 until the target value is found or the search space is empty.

![Binary in Action](https://upload.wikimedia.org/wikipedia/commons/9/9c/Optimal-binary-search-tree-from-sorted-array.gif?20200610182412)

**Example:** 

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Return -1 if the target is not found
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50];
const target = 30;
const result = binarySearch(sortedArray, target);

console.log(result); // Output: 2 (index of target value 30 in the array)
```

### **3. Key Differences**

![Differences](https://www.doabledanny.com/static/08327c46dbd718a1d2c0c65bd05b801b/1.gif)

- Array Requirement:

    + Linear Search: Works on any array, sorted or unsorted.

    + Binary Search: Requires the array to be sorted.

- Efficiency:
    + Linear Search: Has a time complexity of O(n)O(n)O(n). It checks each element one by one, which can be slow for large arrays.

    + Binary Search: Has a time complexity of O(log⁡n)O(\log n)O(logn). It repeatedly divides the array in half, which is much faster for large arrays.


- Implementation:
    + Linear Search: Simple to implement, just a single loop through the array.

    + Binary Search: Slightly more complex to implement, involves dividing the array and managing indices.


### **Summary**
Linear Search is straightforward and works on any array, but it can be slow for large arrays.

Binary Search is much faster but requires the array to be sorted.

Using these two search algorithms, you can choose the best one based on the size of your array and whether or not it is sorted.
