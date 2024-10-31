// EXERCICE 07
// Biggest Number
// Ecrivez une fonction qui prend en entrée un tableau de nombres
// elle retourne le plus grand des nombres
// indice : au fur et à mesure qu'on parcourt le tableau, stockez le plus grand nombre trouvé dans une variable

const biggestNum = myArray => {
  let theNumber1 = myArray[0];

 

  for (let i = 1; i < myArray.length; i++) {
    
    if (theNumber1 < myArray[i]) {
      theNumber1 = myArray[i];
    }
  }
  return theNumber1;
};

console.log(biggestNum([1, 18, 3, 5])); // affichera 18
console.log(biggestNum([1, 1, 3, 5])); // affichera 5
