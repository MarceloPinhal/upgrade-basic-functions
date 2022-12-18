const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
   let sum = 0;
   for (element of array){
    sum += element
   }
   return sum
  }

  console.log(sumAll(numbers));