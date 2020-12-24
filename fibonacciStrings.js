// Fibonacci Strings
// https://www.codewars.com/kata/5aa39ba75084d7cf45000008


function solve(n) {
  const arr = ['0', '01']
  for (let i = 2; i <= n; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

console.log(solve(4))