// This function calculates a hash for a given string
const sampleHash = (string) => {
    let hash = 0; // Initialize the hash value to 0
    for (let char of string) { // Loop through each character in the input string
        // Update the hash value by adding the product of the current hash value and 23,
        // plus the Unicode value of the current character
        hash += (hash * 23) + char.charCodeAt(0); 
    }
    return hash; // Return the final calculated hash value
}

// This function generates the hash for the password entered by the user
const generateHash = () => {
    // Get the value of the input field with id "password" and store it in the variable 'password'
    const password = document.getElementById("password").value;
    // Call the sampleHash function with the password as the argument to compute the hash
    const hash = sampleHash(password);
    // Set the inner HTML of the element with id "output" to the computed hash value
    document.getElementById("output").innerHTML = hash;
}
