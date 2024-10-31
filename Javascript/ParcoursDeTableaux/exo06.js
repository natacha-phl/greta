// EXERCICE 06
// Ecrivez une fonction qui retourne le nombre de caratères 'e' dans une chaine de caractère
// Aide : vous aurez besoin de la méthode split pour convertir une chaine de caractère dans un tableau
// puis parcourir ce tableau à avec une boucle for pour compter le nombre de 'e'


const numberofCharac = (stringChar, char)  =>{

    let count = 0; 

    let splitArray = [];

    splitArray = stringChar.split('')

    for (let i=0; i<splitArray.length; i++){
        if (splitArray[i] === char){
            count = count +1
        }
    }

    return count

}

// Bonus : Adaptez la fonction pour qu'elle prenne en entrée une chaine de caractère ainsi que le caractère à compter,
// et retourne le nombre d'occurences du caractère

console.log(numberofCharac("blablabla", "a"))
