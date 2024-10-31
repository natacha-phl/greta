// Ecrivez un filtre qui permet de retirer tous les nombres pairs d'un tableau
// utilisez la méthode filter


const arrayNum1 = [1,2,3,4,5,6,7,8,9,10];

const arrayNum2 = arrayNum1.filter((num)=> {
    return num%2===1
})


console.log(arrayNum2)



// Ecrivez un filtre qui permet de retirer tous les éléments d'un tableau qui sont une string (et qui garde tous les autres, les nombres, les objects etc ...)
// utilisez la méthode filter


const array3 = ["Natacha", 12, "Sarah", "Prisci", 140 ]

const array4 = array3.filter((element)=>{
    return typeof element !== "string"
})


console.log(array4);


const arr=[10,3,15,0,555]
// triez le tableau par ordre croissant en utilisant la methode sort

const arrSortCroissant = arr.sort((a,b)=>{
    return a-b
})

console.log(arrSortCroissant);


const arrSortDecroissant = arr.sort((a,b)=>{
    return b-a
})

console.log(arrSortCroissant);

// triez le tableau par ordre décroissant en utilisant la methode sort



//Description: Given an array of strings, use the filter() method to return an array containing only the words with more than 5 characters.

//javascript
//Copier le code
// Example Input
const words = ["apple", "banana", "cat", "elephant", "dog"];

// Expected Output
// ["banana", "elephant"]

// Solution
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ["banana", "elephant"]


// Given an array of temperatures in Celsius, use the map() method to convert each temperature to Fahrenheit. The formula is F = C * 9/5 + 32.

// Example Input
const celsiusTemps = [0, 20, 30, 40];

// Expected Output
// [32, 68, 86, 104]

const celciusToFahrenheit = celsiusTemps.map((celcius)=>{
    return celcius * 9/5 + 32
})

console.log(celciusToFahrenheit)


// Ecrivez une fonction qui retire tous les "e" d'une phrase
// en combinant les méthodes split, join


let phrase = "Je suis un superhero";

const phraseWithoutE = (randomPhrase) =>{

    const arrayWithoutletterE = randomPhrase.split('').filter((letter)=>{
        return letter !== 'e'
    })

    return arrayWithoutletterE.join('')



}



console.log(phraseWithoutE(phrase));


// Ecrivez une fonction qui permet d'évaluer si au moins l'un des éléments d'un tableau est pair
// vous devrez combiner : map, include


const array5 = [0,1,2,3,4,5,7,8,9,10];

const EvenNumber = (tab)=> { 

    let arrayResult = tab.map((num)=>
    {
        if (num%2 === 0){
            return true
        }
    }
    )
 if (arrayResult.includes(true)){
    return true;
 }
    
} 


console.log(EvenNumber(array5))


// Ecrivez une fonction qui donne le nombre d'occurences "str" dans une string "phrase
// en combinant la méthode split et la propriété length

let count;

const numbrOfOcc = (phraseToTest) => {

    const newArray = phraseToTest.split('str')

    return newArray.length-1
    

}


console.log(numbrOfOcc("je suis une nana stromae apostrophe"))



// Ecrivez une fonction qui vérifie si un mot est palindrome
// en combinant les méthodes split, et reverse


const palindrome = (mot) =>{

    let oldArray = mot.split('');
    let newArray = mot.split('').reverse();


    if (oldArray.toString() === newArray.toString()){
        return true
    } else {
        return false
    }
    

}

console.log(palindrome("bibi"))



// Ecrivez une fonction qui prend en entrée un tableau de strings, et un number num. et qui pour chaque phrase la limite à num caractères et remplace la suite par ...
// Vous devrez combiner map, splice 
// exemple : transform(["hello","how are you"],3) renvoie
// ["hel...","how..."]


const transformString = (stringToChange, num) => {
    let string = stringToChange.split("").map((car)=>{
        return car
    })

    if (string.length > num){
        string.splice(num,string.length-num)
    }

    return string.join('')+'...';



}


console.log(transformString("Je suis Natacha PAMPHIL",10));



// en utilisant la methode filter écrivez une fonction qui retire à un tableau tous ses elements qui ont plus de 5 caractères

const fiveCharactersOrFewerOnly=(arr)=> {
    // your code here

    const newArray = arr.filter((char)=>{
        if (char.length <= 5){
            return char;
         }
    })

    return newArray
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// Ecrivez une fonction prend en entrée un tableau de nombres et qui retourne seulement la somme des nombres pairs
// Il faudra combiner les méthodes filter et reduce


const  retunSumEvenNmber = (myArray)=>{ 

    let newArray =  myArray.filter((num)=>{
        return num%2===0
    })

    return newArray.reduce((acc, current) => acc + current)
    //    return newArray.reduce((a, b) => a + b, 0) // le 3èmer argument c'est la valeur de départ soit ca peut etre 0 ou ""   autre

 }


 const array6 = [1,2,3,4,5,6,7,8,9,10]

 console.log(retunSumEvenNmber(array6));