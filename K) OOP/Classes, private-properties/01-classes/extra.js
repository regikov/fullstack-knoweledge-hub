
// Create a constructor function named Student with properties name and grades.
function Student(name, grades) {
    this.name = name;
    this.grades = grades;
  }
// Create an object literal named classroom with properties students (an array of student objects) and averageGrades (an empty object).
  let classroom = {
    students: [],
    averageGrades: {}
  };
  // Create 3 students named Alice, Bob, and Charlie with the following grades...
  let student1 = new Student('Alice', [85, 90, 78]);
  let student2 = new Student('Bob', [92, 88, 79]);
  let student3 = new Student('Charlie', [80, 85, 88]);
  
 
  classroom.students.push(student1);
  classroom.students.push(student2);
  classroom.students.push(student3);
  
// Write a function named calculateAverageGrades that takes the classroom object as a parameter. 
// Inside the function, use nested loops to calculate the average grade for each student and store it in the averageGrades object with the student's name as the key.

  function calculateAverageGrades(classroom) {

    for (let i = 0; i < classroom.students.length; i++) {
      let student = classroom.students[i];
      let grades = student.grades;
      
    
      let sum = 0;
      for (let j = 0; j < grades.length; j++) {
        sum += grades[j];
      }
      
     
      let average = sum / grades.length;
      
      
      classroom.averageGrades[student.name] = average;
    }
  }
  
  // Step 5: Call the function and print the classroom object
  calculateAverageGrades(classroom);
  console.log(classroom);
  