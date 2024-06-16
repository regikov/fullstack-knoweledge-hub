// Create a new set
const mySet = new Set(); 
const mySet2 = new Set(); 

// Add some elements to the set 
mySet.add("apple"); 
mySet.add("banana")
mySet.add("orange")
mySet.add("apple") // adding a duplicate has no affect 
mySet2.add("garlic")
mySet2.add("broccoli")
mySet.delete("banana")

const combinedSet = new Set([...mySet, ...mySet2])

// Display the set's contents in HTML Pharagraph
// const resultParagraph= document.getElementById("result"); 
// // resultParagraph.textContent = "The set contains:" + [...mySet].join(","); 
// resultParagraph.textContent = "The set contains: " + [...combinedSet].join(" , "); 
updateDisplay()
// Check for the presence of an element 
const hasApple = mySet.has("apple")

// Function to update the display
function updateDisplay() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = '';
    combinedSet.forEach(element => {
        resultElement.innerHTML += `<p>${element}</p>`;
    });
}

// Function to add an element
function addElement() {
    const elementInput = document.getElementById('elementInput');
    const elementValue = elementInput.value.trim();

    if (elementValue !== "") {
        combinedSet.add(elementValue);
        updateDisplay();
        elementInput.value = ""; // Clear the input field
    } else {
        alert('Please enter a valid element name.');
    }
}

// Function to remove an element
function removeElement() {
    const elementRemove = document.getElementById('elementRemove');
    const elementValue = elementRemove.value.trim();

    if (combinedSet.has(elementValue)) {
        combinedSet.delete(elementValue);
        updateDisplay();
        elementRemove.value = ''; // Clear the input field
    } else {
        alert('Element not found in the set.');
    }
}