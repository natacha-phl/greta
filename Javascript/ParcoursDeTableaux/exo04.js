// EXERCICE 04
// Ecrivez une fonction qui prend en entrée un tableau de nombre
// Elle retourne la somme des nombres du tableau

const myArray = [1, 3, 5, 4]


const arraySum = array => {
  // début de votre code

  let result= 0;

  for (let i=0; i<myArray.length;i++){

    result = result + array[i];

  }

  return result;
  // fin de votre code
}

console.log(arraySum(myArray)) // affiche 13
console.log(arraySum([100, 200, 300, 400])) // affiche 1000
