// Codewars 7kyu 

// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

// Complete the function that takes a sequence of numbers as single parameter. // Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
 


function sumEvenNumbers(input) {
  let sum = 0 
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] % 2 === 0 && Number.isInteger(input[i])) {
      sum += input[i]
      console.log(sum)
    }
    
  }
  return sum 
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))