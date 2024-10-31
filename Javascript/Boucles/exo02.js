/*
// EXERCICE 2
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

// aide : executez console.log("o---o\n|   |\no---o");
// En testant ce script, vous pourrez constater que la combinaison `\n` déclenche un retour à la ligne

// Début de votre code

const generateString = (num) => {


  let str ="";

for (let i = 0; i< num; i++){
  str = str + "o---o\n"

}

return str;
}


// Fin de votre code


console.log(generateString(4)) // console.log("o---o\no---o\n")
