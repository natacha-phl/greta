// Ecrivez une fonction qui prend en entrée un nombre et qui console log tous les nombres premiers entre 0 et ce nombre

/* let numberToDisplay;

const nombrePremier = num => {
    for (let i= 0; i<=num; i++){

        for (let j=2; j<num; j++){
            if(i%j != 0 && j!=i){

                console.log(i, 'est un chiffre premier')


        }else {
            console.log(i, "PAS UN CHIFFRE PREMIER")

        }

      
    }
      }
    return myArray
}
 */

// let myArray = [];

// const nombrePremier2 = num => {
//   for (let i = 0; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0 && i !== j) {

//         // myArray.push(i);
//         // if (myArray.includes(i)){
//       console.log(i, "est PAS un chiffre premier  ");
//         // }

//       }
//     }
//   }
// };



let myArray = [];

const nombrePremier3 = num => {
  for (let i = 0; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0 && i !== j) {

        myArray.push(i);
        if (myArray.includes(i)){
      console.log(i, "est pas un chiffre premier  ");
        }

      } 
    }
  }
};


//nombrePremier(100);

nombrePremier3(100)

// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
