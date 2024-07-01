// INSERTIOM 

let arr = [6,2,8,3,4]
//SWAP 
// first: 2 | 6, 8, 3, 4 
// second: 2, 6, |  8, 3, 4 (nothing swaped here)
// third: 2, 3, 6, | 8, 4 ("is 3 smaller then 8, yes. Is 3 smaller then 6 which was already sorted, yes. Is 3 smaller than 2 no. So insert between 2 and 8")
// fourth: 2, 3, 6 | 8, 4 (nothing swapped here)
// fifth: 2, 3, 4, 6, | 8, (for smaller than 8 in the unsorted part and also smaller then )

for (let i = 1; i < arr.length; i++) { // no length-1 because it is looking at 1 element at a time . We set it on second element (index 1) because we assume the first element is sorted
    let current = arr[i]; // sets current element to current (key)
    let j = i - 1; // sets up j which will look at the position just before the current element 

    console.log(`Iteration ${i}: ${arr.join(', ')} - Current element: ${current}`);

    while (j >= 0 && arr[j] > current) { // while j is not negative AND element on J index is bigger than current 
        arr[j + 1] = arr[j]; //  then swap 
        j--; // and decrement to check it with all the otger sorted elements 
    }
    arr[j + 1] = current; // then this becomes the current 

    console.log(`After inserting ${current}: ${arr.join(', ')}\n`);
}

console.log(arr);


