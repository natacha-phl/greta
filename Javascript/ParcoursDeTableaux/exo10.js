// EXERCICE 10
// ecrivez une fonction qui prend en entrée un tableau et un num.
// elle réalise une permutation circulaire de rang num
// Aide : utilisez et appelez la fonction définie en exercice précédent autant de fois qu'il le faut ;)

// Exemple: soit le tableau [12,‘toto’,13,‘titi’]
// Une permutation circulaire de rang 2 décale tout de deux positions vers la droite
// ==> [13,'titi',12,‘toto’]
// Une permutation circulaire de rang 4 le laissera inchangé puisqu'on aura fait un tour complet


const permutationCirculaire = (myArray, rang) => {

    let newArray = [];
  
      newArray.push(myArray[myArray.length-rang]);
  
  
      for (let i = 0; i < myArray.length-rang; i++) {
          newArray.push(myArray[i])
      }
  
      return newArray;
  
    }
  ;
  
  console.log(permutationCirculaire([1, 2, 3],2)); // affichera [3,1,2)
  console.log(permutationCirculaire([12,"toto",13,"titi"],2)) // affichera [‘titi’,12,‘toto’,13]
