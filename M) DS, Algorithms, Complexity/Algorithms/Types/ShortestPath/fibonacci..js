function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(4));


// fibonacci(4)

// return fibonacci(3) + fibonacci(2);
// return fibonacci(3) + fibonacci(1) + fibonacci(0)
// return fibonacci(3) + 1 + 0
// return fibonacci(2) + fibonacci(1) + 1 + 0
// return fibonacci(2) + 1 + 1 + 0
// return fibonacci(1) + fibonacci(0) + 1 + 1 + 0
// return 1 + 0 + 1 +1 +0 // the function fibonacci(4) value is 3 



function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(3));
console.log(factorial(0)); 

/* fibonacci (5)
- bigger than base case -
return 5 * factorial(4)

    fibonacci (4)
    - bigger than base case -
    return 4 * factorial(3)

          fibonacci (3)
    - bigger than base case -
    return 3 * factorial(2)

            fibonacci (2)
    - bigger than base case -
    return 2 * factorial(1) ---> meeting base case, so return base case 

     