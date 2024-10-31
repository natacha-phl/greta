// EXERCICE 09
// Ecrivez une fonction qui retourne une permutation circulaire simple d'un tableau

const permutationCirculaire = myArray => {

  let newArray = [];

    newArray.push(myArray[myArray.length-1]);


    for (let i = 0; i < myArray.length-1; i++) {
        newArray.push(myArray[i])
    }

    return newArray;

  }
;

console.log(permutationCirculaire([1, 2, 3])); // affichera [3,1,2)
console.log(permutationCirculaire([12,"toto",13,"titi"])) // affichera [‘titi’,12,‘toto’,13]
