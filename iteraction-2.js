const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord (array){
    let maximum = 0;
    // console.log(maximum);
    for (element of array){
        // console.log(element.length)
        if (element.length > maximum){
            maximum = element.length
        }
    }
    console.log (maximum)
}

findLongestWord(avengers);