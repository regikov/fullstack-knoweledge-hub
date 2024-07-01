// Insertion Sort Function
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

// Merge Sort Function
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

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

// Measure Execution Time Function
const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

function measureExecutionTime(algorithm, array) {
    const start = performance.now();
    algorithm(array);
    const end = performance.now();
    return end - start;
}

const largeArrayForInsertionSort = largeArray.slice();
const largeArrayForMergeSort = largeArray.slice();

const insertionTime = measureExecutionTime(insertionSort, largeArrayForInsertionSort);
const mergeSortTime = measureExecutionTime(mergeSort, largeArrayForMergeSort);

console.log(`Insertion Sort Time: ${insertionTime}`);
console.log(`Merge Sort Time: ${mergeSortTime}`);
