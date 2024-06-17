## Sorting Algorithms in JavaScript

Sorting algorithms are ways to organize the items in a list (like numbers or words) into a specific order, such as smallest to largest or alphabetically. 


### 1. Bubble Sort

Bubble Sort is like sorting playing cards in your hands by repeatedly comparing each pair of cards and swapping them if they are in the wrong order.

You go through the cards multiple times until all the cards are in the right order.

**How Bubble Sort Works:**

1. Start at the beginning of the list.

2. Compare the first two items. If the first item is bigger than the second, swap them.

3. Move to the next pair and repeat the comparison and swap if needed.

4. Continue this process until the end of the list.
Repeat steps 1-4 until you go through the entire list without needing any swaps.

![Bubble Sort](https://www.doabledanny.com/static/99417c8008ab8e5a75d2116278ebcc6a/2.gif)

**Example** 

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the items
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

### 2. Selection Sort

Selection Sort is like sorting playing cards by repeatedly finding the smallest card and moving it to the front.

**How Selection Sort Works:**
1. Start at the beginning of the list.
2. Find the smallest item in the list.
3. Swap it with the first item.
4. Move to the next item and repeat steps 2-3 for the rest of the list.
5. Continue this process until the entire list is sorted.

![Selection Sort](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5WXRN62ddiM_Gcf4GDdCZg.gif)


**Example**
```javascript 
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap the items
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = selectionSort(unsortedArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

### 3. Insertion Sort
Insertion Sort is like sorting playing cards by taking one card at a time and inserting it into its correct position in your hand.

**How Insertion Sort Works:**

1. Start with the second item in the list (the first item is already "sorted").
2. Compare it with the items before it and insert it into the correct position.
3. Move to the next item and repeat the process until the entire list is sorted.

![Insertion Sort](https://miro.medium.com/v2/resize:fit:600/format:webp/1*bmfRxyIQZEK0Iu5T6YV1sw.gif)


**Example**
```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = insertionSort(unsortedArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

### 4. Merge Sort

Merge Sort is like splitting a deck of cards into smaller piles, sorting each pile, and then merging the piles back together in order.

**How Merge Sort Works:**

1. Divide the list into two halves.
2. Recursively sort each half.
3. Merge the two sorted halves back together 


![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210)

**Example:**

```javascript 
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

### 5. Quick Sort

Quick Sort is like picking a random card (pivot) and moving all cards smaller than the pivot to one side and all cards larger to the other, then repeating the process for each side.

**How Quick Sort Works:**

1. Choose a pivot item.
2. Partition the list into two parts: items less than the pivot and items greater than the pivot.
3. Recursively sort each part.
4. Combine the sorted parts and the pivot into a single sorted list.

![Quick Sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)


```javascript 
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

### 6. Heap Sort
Heap Sort is like organizing a tournament where each player competes to become the champion. The winner (maximum element) is repeatedly removed and placed in the sorted list.

**How Heap Sort Works:**
1. Build a heap from the list.
2. Repeatedly remove the largest element from the heap and add it to the sorted list.
3. Rebuild the heap and repeat until all elements are sorted.

![Heap Sort](https://upload.wikimedia.org/wikipedia/commons/f/fe/Heap_sort_example.gif)

**Example:** 
```javascript 
function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = heapSort(unsortedArray);

console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
```

### Summary 

- Bubble Sort: Simple but inefficient for large lists. Think of bubbling up the largest items to the end.

- Selection Sort: Selects the smallest item and places it at the start, then repeats. Simple but not efficient for large lists.

- Insertion Sort: Inserts each item into its correct position, one by one. Good for small or nearly sorted lists.

- Merge Sort: Splits the list into smaller parts, sorts them, and merges them back together. Efficient but requires extra space.

- Quick Sort: Divides the list by a pivot and sorts the parts independently. Very efficient for large lists.

- Heap Sort: Organizes elements in a heap and repeatedly extracts the largest element to build the sorted list. Efficient and does not require extra space, but not stable.