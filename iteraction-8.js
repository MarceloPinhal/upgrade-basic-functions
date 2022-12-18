const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(array,element) {
   let counter = 0;
   for (item of array){
    if (item === element){
        counter ++;
    }
   }
   return counter
  }

  console.log(repeatCounter(counterWords,"repeat"))