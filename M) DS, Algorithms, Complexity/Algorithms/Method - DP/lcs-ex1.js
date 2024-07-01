// TASK 1 (27.06.2024)
function calculateLCSLength() {
    const string1 = document.getElementById('string1').value
    const string2 = document.getElementById('string2').value
    const m = string1.length
    const n = string2.length
    // Creating a 2D array called dp to store the lengths of the LCS at different points.
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0)); // This line creates an array with m + 1 rows and n + 1 columns, all initially filled with 0.

    for (let i = 1; i <= m; i++) { // starting a loop that goes through each character of string1
        for (let j = 1; j <= n; j++) { // starting an other loop that goes through each character of string2
            if (string1[i - 1] === string2[j - 1]) { // checking  if the characters of string1 and string2 at the current positions are the same
                dp[i][j] = dp[i - 1][j - 1] + 1; // if so then LCS can be extended by 1 character from the previous LCS length.
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); //  It takes the maximum value from either the previous row or the previous column, 
                 //ignoring one of the characters and continuing
            }
        }
    }

    document.getElementById('resultLength').innerText = 'Length of LCS: ' + dp[m][n]; // updating the text of the HTML element with id resultLength to show the length of the LCS, which is found at dp[m][n].
}

function calculateLCSString() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    const m = string1.length;
    const n = string2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (string1[i - 1] === string2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let i = m, j = n;  //initializes i and j to the lengths of string1 and string2.
    let lcs = ''; // empty string to store 
    while (i > 0 && j > 0) { //loop that continues until either i or j becomes 0.
        if (string1[i - 1] === string2[j - 1]) { // if the characters at positions i-1 and j-1 are the same, it means they are part of the LCS
            lcs = string1[i - 1] + lcs; // the character is added to the front of the lcs string.
            i--;
            j--; // both I, j decremented to move diagonally on the table
        } else if (dp[i - 1][j] > dp[i][j - 1]) { // ff the value from the previous row is greater than the value from the previous column, it moves up in the table.
            i--; // decrement i
        } else {
            j--; // it moved to the left
        }
    }

    document.getElementById('resultString').innerText = 'LCS: ' + lcs; // updating the text of the HTML element with id resultString to show the actual LCS
}