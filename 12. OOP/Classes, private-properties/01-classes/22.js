// Write a JavaScript function named sumArray that takes an array of numbers as a parameter.
// Inside the function, use a loop to calculate the sum of all elements in the array.
// Return the sum.
// Call the sumArray function with a sample array and print the result to the console.

function sumArray (numbers) {
let sum = 0; 
for (let i = 0; i < numbers.length; i++ )
sum = sum + numbers[i]
return sum 
}

let testArray = [1,2,3,4,5,6];
let results = sumArray (testArray)

console.log(results);

