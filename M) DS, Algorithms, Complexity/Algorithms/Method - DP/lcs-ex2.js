function findCommonSubsequences() {
    const string1 = document.getElementById('string1').value; // getting the value of the first string input
    const string2 = document.getElementById('string2').value; // getting value of the second string input
    const length = parseInt(document.getElementById('length').value); // get the desired length of the subsequences and convert it to an integer

    if (isNaN(length) || length <= 0) { // if NaN or negative
        document.getElementById('resultSubsequences').innerText = 'Please enter a valid positive number for the length.'; //error message if the length is invalid
        return; // exiting the function if the length is invalid
    }

    const subsequences1 = getAllSubsequences(string1); // getting all subsequences of the first string
    const subsequences2 = getAllSubsequences(string2); // getting all subsequences of the second string

    const commonSubsequences = subsequences1.filter(subseq => subsequences2.includes(subseq) && subseq.length === length); 
    // Filter subsequences (.filter creating new array) for the common elements on specified length

    document.getElementById('resultSubsequences').innerText = 'Common Subsequences of length ' + length + ': ' + (commonSubsequences.length > 0 ? commonSubsequences.join(', ') : 'None'); 
    // Display the common subsequences or a message if none are found
}

function getAllSubsequences(str) {
    const subsequences = []; // Initialize an array to store subsequences

    const generateSubsequences = (index, currentSubsequence) => { // Recursive function to generate subsequences
        if (index === str.length) { // Base case: if the index reaches the end of the string
            subsequences.push(currentSubsequence); // Add the current subsequence to the array
            return; // Exit the function
        }

        generateSubsequences(index + 1, currentSubsequence + str[index]); // Include the current character in the subsequence
        generateSubsequences(index + 1, currentSubsequence); // Exclude the current character from the subsequence
    };

    generateSubsequences(0, ''); // Start the recursion with an empty subsequence
    return subsequences; // Return the array of subsequences
}
