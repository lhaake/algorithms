// Two Sum
// Given an array of integers and a target number, determine whether there is a pair of numbers in the array that sums to exactly the target number.

let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2]


const twoSum = (arr, target) => {
    let complimentsArr = []  
    // nested for loop 
    for(let i = 0; i < arr.length; i += 1) {
        // the second loop starts at the next index position of first loop
        for(let x = i + 1; x < arr.length; x += 1) {  
            // looking for pair of nums that will add up to target 
            if(arr[i] + arr[x] === target) {          
                complimentsArr.push(arr[i], arr[x])
                return complimentsArr
            }
        }
    }
    return complimentsArr
}

console.log(twoSum(numsArray, 9))  // => 9 is the target number