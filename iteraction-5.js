const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
let numbersSum = 0;
let stringsSum = 0;
for (element of mixedElements){
    if (typeof element === "number"){
    numbersSum += element
} else {
    stringsSum += element.length
}
}
return (numbersSum, stringsSum)
}




console.log(averageWord(mixedElements))