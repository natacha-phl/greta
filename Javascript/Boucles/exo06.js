// EXERCICE 6
// Creez une fonction qui prend en entree un nombre, une puissance et retourne le nombre a la puissance
// exemple : console.log ( puissance(3,4) ) va afficher 81
// Pas le droit d'utiliser un opérateur de puissance

// début de votre code


const power = (num, puissance) => {

    let result = 1;
    
    for (let i=1; i<= puissance; i++){

        result = result * num

    }

    return result
}

// fin de votre code
console.log(power(3, 2)) // affiche 9
console.log(power(2, 5)) // affiche 32
console.log(power(5, 3)) // affiche 125
