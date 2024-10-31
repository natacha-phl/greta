// EXERCICE 4
// Ecrivez une fonction qui prend en entrée un nombre num et qui retourne la factorielle de num.
// utilisez une boucle for.
// exemple : console.log(factorielle(7)) doit afficher 5040


let accumulatorNumber = 1;

const factorielle = (num) => {

    for (let i=1; i<=num; i++){
        accumulatorNumber =  accumulatorNumber *i
    
    }

    return accumulatorNumber;

}

console.log(factorielle(7))

