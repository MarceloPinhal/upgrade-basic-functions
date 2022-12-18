const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(array,element) {
   for (let i = 0; i <array.length; i++){
    if (array[i] === element){
        return (`${element} is at position ${i}`)
    } else if (array[i] !== element){
        return false
   } 
  }
}

console.log(finderName(nameFinder,"Bruce"))

//  Why my code always returns false? I don't get it. 