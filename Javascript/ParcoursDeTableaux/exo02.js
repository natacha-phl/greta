// EXERCICE 02
// Créez une fonction displayArray(tab) qui recevra en argument un tableau de chaînes de caractères et le retournera sous la forme d'une chaîne de caractères séparées de virgules
// Pour cela vous devez parcourir le tableau à l'aide d'une boucle for

/* const displayArray = tab => {
  for (let i = 0; i < tab.length; i++) {
    charConcat = charConcat + tab[i] + ", ";
  }

  charConcatFinal = charConcat.slice(0, -2);

  return charConcatFinal;
};

// Exemples
console.log(displayArray(["halem", "francis", "celine"])); // Affichera "halem,francis,celine"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme, Banane, Abricot, Cerise" */

// Bonus : le dernier élément est écrit avec "et" devant.

/* const displayArrayBonus = tab => {
  let charConcat = "";
  let charConcatFinal = "";
  for (let i = 0; i < tab.length; i++) {
    if (i <= tab.length - 2) {
      charConcat = charConcat + tab[i] + ", ";
    } else if (i === tab.length - 1) {
      charConcatFinal = charConcat.slice(0, -2) + " et " + tab[i];
    }
  }

  //   charConcatFinal = charConcat.slice(0, -2);

  return charConcatFinal;
}; */


const displayArrayBonus = tab => {

  let charConcat = "";

  for (let i = 0; i < tab.length; i++){

    charConcat = charConcat + ", " + tab[i] ;

  }

  return charConcat;
}
// Exemples
console.log(displayArrayBonus(["harlem", "francis", "celine"])); // Affichera "halem,francis et celine"
console.log(displayArrayBonus(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme, Banane, Abricot et Cerise"
