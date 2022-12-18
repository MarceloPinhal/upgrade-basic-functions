function sum (numberOne,numberTwo){
    if (numberOne > numberTwo){
        return numberOne
    } else if (numberOne < numberTwo){
        return numberTwo
    }
}

let valorMasAlto = sum(13,20);
console.log(valorMasAlto);