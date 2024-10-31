// EXERCICE 3
// Ecrivez une fonction qui prend en entrée un tableau et qui retourne la somme du premier et du dernier elements d'un tableau
// Note: il n'ya pas à utiliser de boucle ici.

const sumFirstLast = array => {
    // début de votre code ici

    let dernierElement = array.pop();
    return  array[0]+dernierElement


    //voir correction array.lenght-1
  
    // fin de votre code ici
  } 




  
  console.log(sumFirstLast([1, 3, 5, 2, 5])) // affiche 6
  console.log(sumFirstLast([4, 3, 10])) // affiche 14
  console.log(sumFirstLast(['gre', 3, 'ta'])) // affiche 'greta
  console.log(sumFirstLast([1, 3])) // 4
  