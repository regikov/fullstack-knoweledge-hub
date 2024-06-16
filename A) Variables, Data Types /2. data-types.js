// *** PRIMITIVE TYPES *** (stored in stack and accessed from it)

// 1. String
let firstName = 'Sara';
console.log(firstName, typeof firstName);

// 2. Number, which can be integers or floating point numbers
const age = 30;
const temp = 98.9;
console.log(age);
console.log(temp);

// 3. Boolean
const hasKids = true;
console.log(hasKids);

// 4. Null, aka intentional absence of any object value 
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// 5. Undefined, aka a variable that has not been defined 
let score;
console.log(score, typeof score);

// 6. Symbol
const id = Symbol('id');

// 7. BigInt, aka for very big integers which other number type can't handle
const n = 9007199254740991n;
console.log(n, typeof n);


// ***REFERENCE TYPES*** (like arrays, object literals, functions) (stored in heap and accessed by reference)

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
