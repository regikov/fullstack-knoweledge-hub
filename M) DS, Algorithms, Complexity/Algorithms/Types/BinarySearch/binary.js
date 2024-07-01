const numbers = [2,3,5,7,11,13,17,19,23];
const resultDisplay = document.getElementById("result")

function binarySearch(numbers,target) {
    let left = 0;
    let right = numbers.length -1

    while (left <= right) {
        const middle = Math.floor((left+right)/2);
        const middleNumber = numbers[middle]

    if (middleNumber === target) {
        return middle;
    } else if (middleNumber < target) {
        left= middle + 1;
    } else {
        right= middle - 1;
    }
    }
    return  -1 //Not found 
}

function search() {
    const searchNumber = parseInt(document.getElementById("searchNumber").value)
    const index = binarySearch(numbers,searchNumber); 

    if (index !== -1) {
        resultDisplay.textContent = `Number ${searchNumber} found at index ${index}`;
    } else {
        resultDisplay.textContent = `Number ${searchNumber} not found`;
    }
}