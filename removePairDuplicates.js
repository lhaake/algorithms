// Remove duplicate letters from a string
    // Given a string, remove letters having a lowercase letter followed by same uppercase letter and vice-versa and then return a new string with those characters removed.

    // Example 1:
        // Input: abcCkDdppGGa
        // Output: abkppGGa
        // Explanation:
            // cC is one such pair where same lowercase and uppercase letters are repeated.
            // Dd is one such pair where same uppercase and lowercase letters are repeated.

    // Example 2:
        // Input: jHYti
        // Output: jHYti
        // Explanation:
            // Since there are no pairs where same lowercase and uppercase letters repeated adjacently no characters were removed and the original string has been returned.

function removePairDuplicate(str) {

   // variable to keep track of the previous character in the string
    let previousChar = "";

    // this the string we will return with the dupes removed
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        
        // variable for current character in string during iteration
        let currentChar = str[i];

        // if the current character doesn't equal the previous character (meaning a duplicate), then add the character to the newString variable. Set the previousChar variable to currentChar
        if (currentChar !== previousChar) {
            newString += currentChar;
            previousChar = currentChar;

            console.log("This is the previousChar: ", previousChar)
            console.log("This is the newString: ", newString)
        }
    }

    return newString
}

console.log(removePairDuplicate("aabbccdd")) // => abcd
console.log(removePairDuplicate("abcCkDdppGGa")); // => abcCkDdpGa
