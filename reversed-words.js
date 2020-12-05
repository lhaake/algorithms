// Codewars 8kyu https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// Complete the solution so that it reverses all of the words within the string passed in. Example:
    // reverseWords("The greatest victory is that which requires no battle") should return "battle no requires which that is victory greatest The"

// using .reverse()   
const reverseWords = (str) => {
  
  return str.split(" ").reverse().join(" ");

}

// without .reverse()
const reverseWords = (str) => {
  let newStr = ""
  let arr = []
  arr = str.split(" ")
  console.log(arr)
  let newarray = []

  for(let i = 0; i < arr.length; i += 1) {
    newarray.unshift(arr[i])
    console.log(newarray)
  }

  newStr = newarray.join(" ")
  
  return newStr;
}