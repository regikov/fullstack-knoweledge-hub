/* MEMOIZATION 
Memoization is a top-down approach where we solve the problem recursively 
and store the results of subproblems to avoid redundant calculations.*/ 


// Initialize an array to store computed Fibonacci numbers
const fibMemo = [];

// Function to compute the nth Fibonacci number using memoization
const fibMemoization = (n) => {
    // Base cases: If n is 0 or 1, return n
    if (n <= 1) {
        return n;
    }
    
    // Check if the result for fib(n) is already computed and stored in fibMemo
    if (fibMemo[n]) {
        return fibMemo[n]; // Return the stored result
    }
    
    // Compute the result for fib(n) recursively and store it in fibMemo
    fibMemo[n] = fibMemoization(n - 1) + fibMemoization(n - 2);
    
    // Return the computed result
    return fibMemo[n];
}

// Test the memoization function
const testMemo = 10; // Change this value to test other numbers
console.log(`Fibonacci number at position ${testMemo} is ${fibMemoization(testMemo)}`);

/* TABULATION 
Tabulation is a bottom-up approach where we solve the problem iteratively
 and build up the solution using a table.*/ 

 // Tabulation example to compute the nth Fibonacci number
// Function to compute the nth Fibonacci number using tabulation
const fibTabulation = (n) => {
    // Initialize a table to store Fibonacci numbers up to n
    const fibTable = [0, 1]; // Base cases: fib(0) = 0, fib(1) = 1
    
    // Iterate from 2 to n to fill the table with Fibonacci numbers
    for (let i = 2; i <= n; i++) {
        // Compute fib(i) as the sum of the two preceding numbers
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }
    
    // Return the nth Fibonacci number
    return fibTable[n];
}

// Test the tabulation function
const testTab = 10; // Change this value to test other numbers
console.log(`Fibonacci number at position ${testTab} is ${fibTabulation(testTab)}`);


 