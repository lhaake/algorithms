// Is it a palindrome?
// Codewars
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

// https://medium.com/better-programming/algorithms-101-palindromes-8a06ea97af86


function isPalindrome(x) {
  let l = x.length
  x = x.toLowerCase()

  for (let i = 0; i < l/2; i++){

    if (x[i] !== x[l - 1 - i]) {
      return false
    }
  }
  return true 
}

console.log(isPalindrome("racecar"))