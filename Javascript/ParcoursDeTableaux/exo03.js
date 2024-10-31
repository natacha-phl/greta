// EXERCICE 03
// Créez une fonction displayArray(tab, option) qui recevra en premier paramètre un tableau de chaînes
// de caractères et le retournera sous la forme d'une chaîne de caractères.
// Le deuxième paramètre permettra d'activer les séparateurs.

const displayArray = (tab, option) => {
  let charConcat = "";
  let charConcatFinal = "";
  for (let i = 0; i < tab.length; i++) {
    if (option === true) {
      if (i < tab.length - 1) {
        charConcat = charConcat + tab[i] + ", ";
      } else {
        charConcat = charConcat + tab[i];
      }
    } else {
      charConcat = charConcat + tab[i] + " ";
    }
  }

  return charConcat;
};

// Exemples
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false)); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], true)); // Affichera "Pomme, Banane, Abricot, Cerise"
