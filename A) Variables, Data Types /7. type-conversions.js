// Convert string to number (we can do it 3 different ways)
var amount = "100";

amount = parseInt(amount);
amount = +amount;
amount = Number(amount);


// Convert number to string (we can do it 2 different ways)
let amount = 1000;

amount = amount.toString();
amount = String(amount);


// Convert string to decimal 
let amount = "99.5"
amount = parseFloat(amount);


// Convert number to boolean
let amount = 1;
amount = Boolean(amount);
console.log(amount, typeof amount);

// Ways to get NaN (aka Not A Number)
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);