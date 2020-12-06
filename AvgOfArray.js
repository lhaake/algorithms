// Get the mean of an array 8kyu 
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let sum = 0
  let avg = 0
  
  for(let i = 0; i < marks.length; i += 1) {
    sum += marks[i]
  }
  
  avg = sum / marks.length 
  
  return Math.floor(avg)
}