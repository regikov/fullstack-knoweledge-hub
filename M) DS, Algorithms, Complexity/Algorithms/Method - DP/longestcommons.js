// Function to find the longest common subsequence (LCS) of two strings
const longestCommonSubSequence = (str1, str2) => {
    const lenStr1 = str1.length; // Get the length of str1
    const lenStr2 = str2.length; // Get the length of str2
    console.log(lenStr1, lenStr2); // Print the lengths of the strings for debugging

    // Initialize a 2D array (dp) with dimensions (lenStr1 + 1) x (lenStr2 + 1) and fill it with empty strings
    const dp = Array.from({ length: lenStr1 + 1 }, () => Array(lenStr2 + 1).fill(''));
    // Print the initial state of the dp array for debugging
    console.log(dp);

    // Loop through each character of str1
    for (let i = 1; i <= lenStr1; i++) {
        // Loop through each character of str2
        for (let j = 1; j <= lenStr2; j++) {
            // Check if the current characters of str1 and str2 match
            if (str1[i - 1] === str2[j - 1]) {
                console.log(`I find a match in index ${i - 1} of str1 and ${j - 1} of str2 char=${str1[i - 1]}`);
                // If they match, update the dp array at position (i, j) with the value from (i-1, j-1) plus the matching character
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
                console.log(`max value: ${dp[i][j]}`);
            } else {
                // If they don't match, take the longer value from either (i, j-1) or (i-1, j)
                dp[i][j] = dp[i][j - 1].length > dp[i - 1][j].length ? dp[i][j - 1] : dp[i - 1][j];
            }
        }
    }
    // Print the final state of the dp array for debugging
    console.log(dp);

    // Return the value at the bottom-right corner of the dp array, which is the LCS of str1 and str2
    return dp[lenStr1][lenStr2];
}

// Function to calculate the LCS and display the result
const calculateLCS = () => {
    // Get the input strings from the HTML input elements
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    console.log(str1, str2); // Print the input strings for debugging

    // Calculate the LCS using the longestCommonSubSequence function
    const result = longestCommonSubSequence(str1, str2);

    // Display the LCS in the HTML output element
    document.getElementById("output").innerText = result;
}
