// EXERCICE 05
// Ecrire une fonction qui prend en entrée un tableau ainsi qu'une chaine de caractere
// La fonction retourn true si l'une des valeurs du tableau correspond à la chaine de caractere

const searchElement = (array, str) => {
  // début de votre code ici

  if (array.includes(str)) {
    return array.indexOf(str);
    //return true
  } else {
    return -1;
    // return false
  }
  // fin de votre code ici
};

console.log(
  searchElement(["simon", "malika", "lilian", "hideya", "francis"], "hideya")
); // affiche TRUE
console.log(searchElement(["simon", "malika", "lilian"], "simon")); // affiche TRUE
console.log(
  searchElement(["simon", "malika", "lilian", "hideya", "francis"], "pierre")
); // affiche FALSE

// Bonus : complétez la fonction afin qu'elle retourne la position dans le tableau de la chaine de caratère trouvée, et retoure -1 si non trouvée
console.log(searchElement(["simon", "malika", "lilian"], "lilian")); // retourne 2
console.log(searchElement(['simon','malika','lilian'],'pierre')) // retourne -1
