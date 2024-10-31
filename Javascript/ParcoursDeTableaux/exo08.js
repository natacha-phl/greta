// EXERCICE 08
// Ecrivez une fonction qui prend en entrée un tableau, et retourne le tableau inversé



const reverseArray = (myArray) => {

    return myArray.reverse()

}

console.log(reverseArray(['pomme', 'poire', 'brocolis'])) // affichera ['brocolis','poire','pomme']
console.log(reverseArray([1, 2, 40, 12, 5])) // affichera [5,12,40,2,1]

