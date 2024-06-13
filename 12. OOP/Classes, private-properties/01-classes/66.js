// ● Write a JavaScript function named findMax that takes an array of
// numbers as a parameter.
// ● Inside the function, use a loop to iterate through the array elements and find the maximum number.
// ● Return the maximum number found in the array.
// ● Call the findMax function with a sample array and print the result
// to the console.

function findMax(numbers) {

  if (numbers.length === 0) {
    return "Enter valid numbers";
  };

  let max = numbers[0];
  let i = 1;

  while (i < numbers.length) {
    
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  }

  return max;
}

const sampleArray = [3, 5, 7, 2, 8, -1, 4, 10, 8998999999999];
const maxNumber = findMax(sampleArray);

console.log("The max number is:", maxNumber);