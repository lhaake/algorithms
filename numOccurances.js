// You have a stack of cash and you want to know the n occurances of your types of bills ($1, $5, $10, $20...)
// Parameters are an array and n occurances (all integers)
// Return an integer (bill)

const findAll = (array, n) => {
   let newObj = {}
   let result = 0

   for (let i = 0; i < array.length; i += 1) {
      
     if (newObj[array[i]] === n) {
       result = array[i]
       
     } else if (newObj[array[i]]) {
       newObj[array[i]] += 1
       
     } else if(!newObj[array[i]] && array[i] > 0) {
        newObj[array[i]] = 1
     }
     console.log(newObj)
   }
  return result

}

console.log(findAll([5, 1, 5, 5, 10, 20, 1, 20, 10, 5], 3))