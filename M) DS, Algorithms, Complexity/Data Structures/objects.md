# JS Objects in practice
## Guide for confused beginners

### **Overview**

In this md file, you can find some use cases of Objects and a line-by-line solution about [this class's](https://docs.google.com/presentation/d/1jUrlbLtdB9N3nMHlbknn5pgDuXoZLF4Ymy-sy6x7mK0/edit#slide=id.g2a9e913c11d_2_28) excercises, on 12th June 2024. 

&nbsp;

### **1. What Are Objects?**

An Object is an unordered collection of **properties**, where each property has a name (or key) and a value. These properties can hold any type of data, including other objects, arrays, or even functions.

Object **methods** are actions that can be performed on objects.

A method is a function definition stored as a property value.

&nbsp;

### **2. Ways to create Objects:**

&nbsp;

- **Object Literals**

This is the simplest and most common way to create an object. You define the object using curly braces {} and specify its properties and methods directly inside.

*Common Use Case:* When you know the properties and values of the object at the time of creation, using object literal notation is more straightforward.

``` javascript

let person = {
    name: "Alice",
    age: 25, 
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
```
&nbsp;

- **With the new Object() Syntax**

You can create an object using the Object constructor. This approach is less common but can be useful in certain scenarios.

*Common use case*: When you need to create an object dynamically and may add properties later.

``` javascript 

let person = new Object();
person.name = "Alice";
person.age = 28;
person.greet = function() {
    console.log("Hello, my name is " + this.name);
};

```
&nbsp;

- **With Constructor function**

A constructor function is a special type of function used to *create multiple objects with similar properties and methods.* It uses the "this." keyword to assign properties and methods.

*Common use case*: When you need to create multiple objects with the same structure and properties, like creating multiple user profiles.

``` javascript 

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let person1 = new Person("Alice", 28);
let person2 = new Person("Bob", 32);

```
&nbsp;

TBC LATER ON

&nbsp;

### **3. Excercise**

**SCOPE:**

This exercise involves creating a simple HTML page with a paragraph element connected to a manager.js file. 

In the JS file, we create two user objects, store them in an array, and provide functionality to remove users by ID. 

For that functionality we add an input field and button in the HTML for ID removal. 

Then we implement that removeUserByID function in JS, converting the input to an integer, finding the user by ID, and splicing the array.

Additionally, a form for user registration is created, validating input and displaying registered users.


&nbsp;
**<p align="center"> PART1: REMOVING USER BY ID</p>**

&nbsp;

**-----JAVASCRIPT-----**

### Function Definition: createUser
``` javascript
function createUser(name, id, noOfProjects) {
```
Function Declaration: This line declares a function named **createUser** that takes three parameters: *name,* *id,* and *noOfProjects.*

&nbsp;

### Creating an empty Object
``` javascript
    let user = {};
```
Variable Declaration: This line creates a new variable called **user.**

Empty Object Initialization: user is set to be an empty object {}. This will be used to store the user's details.

&nbsp;

### Assigning Properties to the Object
``` javascript
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
```
Property Assignment: These lines add properties to the user object.

**user.name** is set to the value of the name parameter.
**user.id** is set to the value of the id parameter.
**user.noOfProjects** is set to the value of the noOfProjects parameter.

&nbsp;

### Adding Methods to the Object
``` javascript
    user.getProjects = function () {};
    user.changeName = function () {};
    user.incrementProject = function () {}; 
    user.decrementProject = function () {};
}
```
Method Assignment: These lines add methods to the user object. These methods are currently empty (do nothing).

**user.getProjects** will eventually be a function to get the number of projects.

**user.changeName** will eventually be a function to change the user's name.

**user.incrementProject** will eventually be a function to increase the number of projects.

**user.decrementProject** will eventually be a function to decrease the number of projects.

&nbsp;

### User Objects
``` javascript
const user1 = {
    id: 1,
    username: "jane_doe2",
    name: "Jane Doe",
    age: 30,
    email: "jane@example.com"
}; 

```
``` javascript
const user2 = {
    id: 2,
    username: "john_smoth",
    name: "John Smith",
    age: 25,
    email: "john@example.com"
}
```
Object Definitions: This line defines a constant object user1 and 2 with properties *id,* *username*,*name,* *age,* and *email.*

&nbsp;

### Array of User Objects
```javascript 
const userList = [user1, user2];
```
In this line an array called userList is created that contains the user1 and user2 objects.

&nbsp;

### Function to Display User Information

``` javascript
function displayUserInfo(users) {
```
Function Declaration: This line declares a function named **displayUserInfo** that takes one parameter *users*, which is expected to be an array of user objects.

&nbsp;

### Getting the HTML Element
``` javascript
    const personInfoElement = document.getElementById("person-info");
```
DOM Manipulation: This line gets the HTML element with the ID *person-info* and stores it in the variable **personInfoElement**

&nbsp;

### Clearing Existing Content
``` javascript
    personInfoElement.innerHTML = "";
```
This line clears any existing content inside the **personInfoElement.**

&nbsp;

### Looping Through Users
``` javascript
    users.forEach(user => {
```
This line starts a loop that goes through each user in the users array.

&nbsp;

### Creating a Paragraph for Each User
``` javascript
const userInfoParagraph = document.createElement("p");
userInfoParagraph.textContent = `Name: ${user.name}, Age: ${user.age} Id: ${user.id}`;
```
createElement: This line creates a new *paragraph* element.

textContent: This line sets the text of the paragraph to include the user's name and age.

&nbsp;

### Appending the Paragraph to the HTML Element
``` javascript
        personInfoElement.appendChild(userInfoParagraph);
           });
}
```
Append Element: This line adds the paragraph to the **personInfoElement,** displaying it on the page.

&nbsp;

### Calling displayUserInfo function
``` javascript
    displayUserInfo(userList);
```
Function Call: This line calls the displayUserInfo function and passes the userList array as an argument.

&nbsp;

**-----HTML CODE-----**


```html
<body>
    <h1>User Information</h1>
    <p id="person-info"></p>
    <input type="text" id="userId" placeholder="ID of the user we want to remove">
    <button onclick="removeUserById()">Remove User</button>
    
</body>
```
Following up on our JS, we have to modify the HTML by adding an *input field for our ID*, and the *button* that will handle the **removeUserByID** function we will create in our JS.


&nbsp;

**-----JAVASCRIPT-----**


### Function Definition: removeUserById
```javascript
function removeUserById() {
```
Function Declaration: This line declares a function named **removeUserById.** This function will be responsible for removing a user based on their ID.

&nbsp;

### Getting the User ID from Input
```javascript
const userIdInput = document.getElementById("userId");
```
getElementByID = This line finds the HTML input element with the ID *userId* and assigns it to the variable **userIdInput.** This element is where the user will enter the ID of the user they want to remove.


```javascript
const userId = parseInt(userIdInput.value, 10);
```
Get Input Value: This line gets the value entered in the **userIdInput** element, converts it to a number using *parseInt,* and assigns it to the variable **userId.** The 10 specifies that the number is in base 10 (decimal).

&nbsp;

### Checking if the Input is a Valid Number
```javascript
if(!isNaN(userId)) {
```
Check Valid Number: This line checks if **userId** is a valid number. *isNaN* returns true if the value is NaN (Not-a-Number), so !isNaN(userId) checks if it is a number. If userId is a valid number, the code inside the if block will execute.

&nbsp;

### Finding the User in the List
```javascript
const indexToRemove = userList.findIndex(user => user.id === userId);
```
Find User Index: This line searches the **userList** array to find the index of the user with the specified **userId.** 

The **findIndex** method returns the index of the first element that satisfies the provided testing function (user => user.id === userId). If no user is found, it returns -1.

&nbsp;

### Checking if User Exists
```javascript
if(indexToRemove !== -1) {
```
This line checks if **indexToRemove** is not -1. If it's not -1, it means a user with the specified userId was found in the userList.

&nbsp;

### Removing the User
```javascript
userList.splice(indexToRemove, 1);
```
This line removes one element from the **userList** array at the position **indexToRemove.** The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

&nbsp;

### Updating the Display
```javascript
displayUserInfo(userList);
```
 This line calls the **displayUserInfo** function, passing the updated **userList** to it. This will update the displayed user information on the webpage.

 &nbsp;

### Clearing the Input Field
```javascript
userIdInput.value = "";
```

 &nbsp;

 ### Handling Errors
```javascript
} else {
    alert("User with specified ID does not exist!");
}
```
User Not Found: If **indexToRemove** is -1, this block will execute. It shows an alert message to the user indicating that the user with the specified ID does not exist.

 &nbsp;

### Handling Invalid Input
```javascript
} else {
    alert("Please enter a valid number!");
}
}
```
If **userId** is not a valid number, this block will execute. It shows an alert message to the user indicating that they need to enter a valid number.

&nbsp;



**<p align="center">PART2: REGISTRATION FORM</p>**

### User Registration Form 

```html
<h1>User registration</h1>
    <form id="registrationForm">
        <label for="username">Username:</label>
        <input type="text" id="username" required>
        
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        
        <label for="age">Age:</label>
        <input type="text" id="age" required>
        
        <label for="email">Email:</label>
        <input type="text" id="email" required>
        
        <button type="button" onclick="registerUser()">Register</button>
    </form>
    <h2>Registerd users</h2>
    <div id="registeredUsers"></div>
</body>
```
Here we are creating a *form* where we have our four *input fields* that takes our data(username, name, age, email).

The *id* will be generated automatically when counting the users.
Lastly, an added *button* that will register the users.

&nbsp;

**-----JAVASCRIPT-----**

### Initialize User List
```javascript
let userList = [];
```
Variable Declaration: This line creates an empty array named **userList.** This array will be used to store the user objects that are registered through the form.

&nbsp;

### Function Definition: registerUser
```javascript
function registerUser() {
```
This line declares a function named **registerUser.** This function will handle the process of registering a new user when called.

&nbsp;

### Get Form Input Values
```javascript
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const email = document.getElementById("email").value;

```
Get Input Elements: Each line gets the value entered in the respective input fields (username, name, age, email) using **document.getElementById** and stores them in variables.

Convert Age to Number: The age value is converted to a number using *parseInt* to ensure it is treated as a numerical value. The 10 specifies the base for the conversion, which is decimal.

&nbsp;

### Validate Input
```javascript
    // Validate input
    if (!username || !name || isNaN(age) || !email) {
        alert("Please fill in all the fields with valid information");
        return;
    }
```
Validation Check: This block checks if any of the input fields are empty or if the age is not a number. The *if* condition uses logical OR (||) to ensure all fields are filled with valid information.

Alert and Return: If any validation fails, an *alert* message is shown, and the function exits early (return), preventing further execution.

&nbsp;

### Assign User ID 
```javascript
    const userId = userList.length + 1;
```
This line assigns a unique ID to the new user. The ID is set to be one more than the current length of the userList array, ensuring it increments with each new user.

&nbsp;

### Create User Object
```javascript
    // Create a user object
    const newUser = {
        id: userId,
        username: username,
        name: name,
        age: age,
        email: email
    }
```
This block creates a **newUser object** with the properties *id, username, name, age,* and *email,* using the values collected from the input fields.

&nbsp;

### Add User to List
```javascript
    userList.push(newUser);
```
Add to Array: This line adds the newly created user object to the **userList** array using the **push** method, which appends the object to the end of the array.

&nbsp;

### Update Displayed Information
```javascript
    displayRegisteredUsers();
    clearRegistrationForm();
```
Update Display: This line calls the **displayRegisteredUsers** function to update the displayed list of registered users on the webpage.

Clear Form: This line calls the **clearRegistrationForm** function to clear the input fields in the form, resetting it for the next user.


&nbsp;

### Function to Display Registered Users
```javascript
function displayRegisteredUsers() {
    const registeredUsersList = document.getElementById("registeredUsers");
```
Get Display Element: This line finds the HTML element with the ID *registeredUsers* and assigns it to the variable **registeredUsersList.** This element will be used to display the list of registered users.


```javascript
    registeredUsersList.innerHTML = "";
```
This line clears any existing content in the **registeredUsersList** element to prepare it for updating with the new list of users.

&nbsp;

### Iterate Through Users and Displayinformation
```javascript
    userList.forEach(user => {
        const userInfoParagraph = document.createElement("p");
        userInfoParagraph.textContent = `ID: ${user.id}, Username: ${user.username}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
        registeredUsersList.appendChild(userInfoParagraph);
    });
```
Loop Through Users: This block iterates over each user object in the userList array using forEach.

Create Paragraph: For each user, it creates a new paragraph element

Set Text Content: The paragraph's text content is set to display the user's ID, username, name, age, and email.

Append to Display Element: The paragraph is appended to the registeredUsersList element, updating the webpage with the user's information.
&nbsp;

&nbsp;

### Function to Clear Registration Form
```javascript
function clearRegistrationForm() {
    document.getElementById("username").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}
```
Clear Input Fields: This function resets the values of the form input fields (username, name, age, email) to an empty string, effectively clearing the form for the next entry.

&nbsp;

**<p align="center">FINAL CODES</p>**


### Complete HTML code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information</title>
    <script defer src="script.js"></script>
</head>
<body>
    <!-- First example -->
    <h1>User Information</h1>
    <p id="person-info"></p>
    <input type="text" id="userId" placeholder="ID of the user we want to remove">
    <button onclick="removeUserById()">Remove User</button>

    <!-- Example with form -->
    <h1>User registration</h1>
    <form id="registrationForm">
        <label for="username">Username:</label>
        <input type="text" id="username" required>
        
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        
        <label for="age">Age:</label>
        <input type="text" id="age" required>
        
        <label for="email">Email:</label>
        <input type="text" id="email" required>
        
        <button type="button" onclick="registerUser()">Register</button>
    </form>
    <h2>Registerd users</h2>
    <div id="registeredUsers"></div>
</body>
</html>
```

&nbsp;

### Complete JS Code
```javascript 
// First example

function createUser(name, id, numberOfProjects) {
let user = {};
    user.name = name;
    user.id = id;
    user.numberOfProjects = numberOfProjects;
    user.getProjects = function() {};
    user.changeName = function() {};
    user.incrementNoOfProjects = function() {};
    user.decrementNoOfProjects = function() {};
}

const user1 = {
    id: 1,
    username: "John_Doe",
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

const user2 = {
    id: 2,
    username: "Jane_Smith",
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com"
};

const userList = [user1, user2];

function displayUserInfo(users) {
    const personInfoElement = document.getElementById("person-info");

    personInfoElement.innerHTML = "";

    users.forEach(user => {
        const userInfoParagraph = document.createElement("p");
        userInfoParagraph.textContent = `Name: ${user.name}, Age ${user.age}, Id: ${user.id}`;
        personInfoElement.appendChild(userInfoParagraph);
    });
}

displayUserInfo(userList);


function removeUserById() {
    const userIdInput = document.getElementById("userId");
    const userId = parseInt(userIdInput.value, 10);

    if(!isNaN(userId)) {

        const indexToRemove = userList.findIndex(user => user.id === userId);
        
        if(indexToRemove !== -1) {

            userList.splice(indexToRemove, 1);

            displayUserInfo(userList);

            userIdInput.value = "";
        } else {
            alert("User with specified ID does not exist!");
        }
        
    } else {
        alert("Please enter a valid number!");
    }
}


// Example with form

let userList2 = [];

function registerUser() {
    
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value,10);
    const email = document.getElementById("email").value;

    //Validate input
    if (!username || !name || isNaN(age) || !email) {
        alert("Please fill in all the fields with valid information");
        return;
    }


    const userId = userList2.length + 1;


    const newUser = {
        id: userId,
        username: username,
        name: name,
        age: age,
        email: email
    }

    userList2.push(newUser);

    displayRegisteredUsers();
    clearRegistrationForm();
}

function displayRegisteredUsers() {
    const registeredUsersList = document.getElementById("registeredUsers");

    registeredUsersList.innerHTML = "";

    userList2.forEach(user => {
        const userInfoParagraph = document.createElement("p");
        userInfoParagraph.textContent = `ID: ${user.id}, Username: ${user.username}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
        registeredUsersList.appendChild(userInfoParagraph);
    });
}

function clearRegistrationForm() {
    document.getElementById("username").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}
```
