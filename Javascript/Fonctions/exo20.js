// EXERCICE 20
// Ecrivez une fonction "addTva" qui prend en entrée un prix (type number), et retourne le prix avec la TVA de 20%.
// console.log( addTva(100) ) va afficher 120

const addTva = (num) =>{
    return num + (num *20/100)
}


console.log(addTva(100));