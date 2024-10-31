// EXERCICE 00
// Ecrire une fonction qui prend en argument un tableau de 4 elements
// Elle affiche l'un en dessous de l'autre tous les elements
// Utilisez une boucle for pour y parvenir

const arr = ['navet', 'brocolis', 'concombre', 'oignon']

// votre code ici

const display4elementsLoop = (myArray) =>{
    for (let i=0; i<= myArray.length-1; i++){
        console.log(myArray[i])
        
    }

}

//

display4elementsLoop(arr) // doit afficher
// navet
// brocolis
// concombre
// oignon
