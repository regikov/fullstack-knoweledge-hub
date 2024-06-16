// Create a JavaScript object named student with properties name, age, and grade.
// Assign sample values to these properties.
//  Write a function named displayInfo that takes the studen object as a parameter.
// Inside the function, display the student's information (name, age, grade) to the console.
// Call the displayInfo function with the student object.

class Student {
    constructor(name, age, grade) {
    this.name = name; 
    this.age = age; 
    this.grade = grade; 
}
displayInfo () {
console.log("The name is:", this.name);
console.log("The age is:", this.age);
console.log("The grade is:",this.grade);
};
};

let results = new Student ("Billi", 3, "F"); 

results.displayInfo()


// Create a JavaScript object named student with properties name, age, and grade.
// Assign sample values to these properties.
//  Write a function named displayInfo that takes the studen object as a parameter.
// Inside the function, display the student's information (name, age, grade) to the console.
// Call the displayInfo function with the student object.

let student = {
   name: "Billi",
   age: 3,
   grade: "F"
};

function displayInfo (student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.grade);
}

displayInfo(student)



