// EXERCICE 07
// Ecrivez la fonction suivante :
// Input: Une String
// Output: La String sans les e

const removeVowels =  (char) => {
    let splitArray = [];
    let newChar ="";

    splitArray = char.split("")
    //return splitArray;

    for (let i= 0; i<splitArray.length; i++){

        if(splitArray[i] !== "e"){
            newChar = newChar + splitArray[i]
            }
        
    }

    return newChar;
} 

console.log(removeVowels('greta')) // affiche grta
console.log(removeVowels('repetition')) // affiche rptition
