// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 15px; background-color: black; color: lightgreen';
console.log('%cHello World', styles);

// Re-assigning variables 
let age = 30 
console.log(age);
age = 32
console.log(age);

// Some variables can be undifined 
let score;
score = 1;
console.log(score);

//Addign new assignments for arrays. Can only done this way
const colors = ["red", "yellow", "blue"];
console.log(colors);
colors.push("khaki");
console.log(colors);

// Reassigning 
const person = {
    name: "George"
};
console.log(person)
person.name = "Pedro" 
console.log(person);
