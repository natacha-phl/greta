
// EXERCICE 01
// Créez une fonction displayArray(tab) qui recevra en argument un tableau de chaînes de caractères
// et le retournera sous la forme d'une chaîne de caractères concaténées.
// Vous devez utiliser une boucle for pour parcourir le tableau
// Vous ne devez pas utiliser la methode join.

let charConcat ="";

const displayArray= (tab) => {
    for (let i=0; i<tab.length; i++){

        charConcat = charConcat + tab[i] + " ";

    }

    return charConcat;
}

// Exemples
console.log(displayArray(["halem", "francis", "celine"])); // Affichera "halem francis celine"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme Banane Abricot Cerise"



/* let result= "";

const displayArray = (tab) => {
    for(let i=0; i< tab.length; i++){

        result = result + tab[i]+ " "

    }

    return result;
}

console.log(displayArray(["halem", "francis", "celine"])); // Affichera "halem francis celine" */