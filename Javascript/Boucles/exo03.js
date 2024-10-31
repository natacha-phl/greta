// EXERCICE 3
// Ecrivez une fonction qui prend en entree un nombre num et retourne la somme de 0 à num
// Avec une boucle For
// il faudra utiliser une variable temporaire qui stocke la somme des nombres petit à petit

const sumNumbers = (num) => {
    // debut de votre code

    let accumulatorNumber = 0;


    for (let i=1; i<=num; i++){

        accumulatorNumber = accumulatorNumber +i;
    

    }


    return accumulatorNumber

    
    }



    // fin de votre code
 
 
 
 console.log(sumNumbers(3)) // affiche 6 (car 1+2+3 = 6)
 console.log(sumNumbers(5)) // affiche 15 (car 1+2+3+4+5 = 15)
 console.log(sumNumbers(8)) // affiche 36 (car 1+2+...+8 = 36)