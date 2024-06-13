// Write a JavaScript function named reverseArray that takes an array of strings as a parameter.
// Inside the function, use a loop to reverse the order of elements in the array.
// Return the reversed array.

// Call the reverseArray function with a sample array and print
// the result to the console.

function reverseArray (strings) {
let reversedArray = []; 

for (let i=strings.length - 1; i >= 0; i--) {
reversedArray.push(strings[i]);
}
return reversedArray 
}

let sampleArray = [1,3,5,7,8];
let result = reverseArray(sampleArray); 

console.log(result);