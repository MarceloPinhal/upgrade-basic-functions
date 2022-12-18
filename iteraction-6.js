const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(array) {
    let noDuplicates = []
    for (element of duplicates){
       if (!noDuplicates.includes(element)){
        noDuplicates.push(element);
       }
    }
    console.log(noDuplicates)
}

removeDuplicates(duplicates)