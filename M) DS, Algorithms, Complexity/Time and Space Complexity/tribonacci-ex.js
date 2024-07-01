// Function to calculate the nth Tribonacci number using recursion
function recursiveTribonacci(n) {
    if (n === 0) return 0; // Base case: T(0) = 0
    if (n === 1) return 1; // Base case: T(1) = 1
    if (n === 2) return 1; // Base case: T(2) = 1
    return recursiveTribonacci(n - 1) + recursiveTribonacci(n - 2) + recursiveTribonacci(n - 3);
}

// Function to measure and log the execution time of the recursive Tribonacci function
function measureExecutionTime(algorithm, input) {
    const start = performance.now(); // Start the timer
    algorithm(input); // Run the algorithm
    const end = performance.now(); // End the timer
    return end - start; // Calculate and return the elapsed time
}

// Function to analyze the performance of the recursive Tribonacci function
function analyzeRecursiveTribonacci() {
    let n = 35; // Using 35 to ensure we see the performance difference
    console.log("Recursive Tribonacci:");
    const time = measureExecutionTime(recursiveTribonacci, n); // Measure execution time
    console.log(`Execution Time: ${time} ms`);
    document.getElementById("result").innerText = `Execution Time: ${time} ms`; // Display the result
}
