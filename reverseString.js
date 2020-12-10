// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


// 1)
function solution(str) {
  result = ""
 
  for(let i = 1; i <= str.length; i += 1) {
   result += str.charAt(str.length - i)
   
    console.log(result)
  }
  
  return result
}

// 2) Refactored
function solution(str) {
  result = ""
 
  for(let i = str.length - 1; i >= 0; i--) {
   result += str[i]
   
    console.log(result)
  }
  
  return result
}

// 3) Using .reverse()
function solution(str) {
  return str.split('').reverse().join('');  
}

console.log(solution('world'))