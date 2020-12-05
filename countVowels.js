// Count Vowels in a String

// Write a function count_vowels to count the number of vowels in a given string.

// **Notes:**
    // Return null or None for non-string inputs.
    // Return 0 if the parameter is omitted.

const count_vowels = (str) => {
  let count = 0 
  if ( typeof str !== "string") {
    return null
  }

  for (let i = 0; i < str.length; i += 1) {

    if (str[i] === "a" || str[i] === "A") {
      count += 1
    } 
     if (str[i] === "e" || str[i] === "E") {
      count += 1
    } 
     if (str[i] === "i" || str[i] === "I") {
      count += 1
    } 
     if (str[i] === "o" || str[i] === "O") {
      count += 1
    } 
     if (str[i] === "u" || str[i] === "U") {
      count += 1
    } 
  
  }

return count

}

console.log(count_vowels("aAbcdeEfg")) // => 4
console.log(count_vowels("abcdefg")) // => 2
console.log(count_vowels("bcfgh")) // => 0
console.log(count_vowels(true)) // => null
console.log(count_vowels(12)) // => null
console.log(count_vowels(["a", "b", "c", "d"])) // => null



// 2) Example 

// pseudocode 
// 1. Declare variable total and set to 0
// 2. Set the input string to lowercase 
// 3. Create a for loop
// 4. Loop through every character in the string to see if it is a vowel
// 5. Use an if statement to check each character if equal to a vowel
// 6. If character is a vowel then increment total by 1
// 7. After loop ends, return total, which is the vowel count 

// Big O Notation 
// O(N) Linear Complexity 

function vowelCount(str) {
    let total = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            total += 1;
        }
    }
    console.log(str);
    return total;
}

console.log(vowelCount("All cows eat grass"));
