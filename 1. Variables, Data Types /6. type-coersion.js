let x;

// Coerced to a string  ( adding up strings makes sense to JS, it automatically converts to num to string)
x = 5 + '5';

x = 5 + Number('5'); // we have to add Number if we want it to be treated as num 

// Coerced to a number ( * strings does not makes sense to JS, so it auto converts string to num)
x = 5 * '5'; 

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;

x = Number(null);


// true is coerced to a 1
x = 5 + true;

// false is coerced to 0 (falsy)
x = 5 + false;

// Undefined is coerced to NaN, so the equation will not be a number 
x = 5 + undefined;

console.log(x, typeof x);
