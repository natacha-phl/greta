/*
EXERCICE 07
  Objectif :
  En utilisant une boucle affichez le résultat suivant :
  France, Japon, Colombie, Canada et Italie
*/

const countries = [
    { name: "France" },
    { name: "Japon" },
    { name: "Colombie" },
    { name: "Canada" },
    { name: "Italie" }
  ];
  
  // Début de votre code

  let phrase = "";

  countries.forEach((country)=>{

    phrase += country.name + ", "

  })


  console.log(phrase)
  
  // Fin de votre code
  