// 1 * * * * * * * * CALLBACK SANS PARAMETRES * * * * *

// Ecrivons deux fonctions simples sans paramètres

// une fonction qui console log des A
const printA = () => {
    console.log("A");
  };
  
  // une fonction qui console log des B
  const printB = () => {
    console.log("B");
  };
  
  // Voici maintenant une fonction qui prend en parametre un nombre X et une fonction, et qui execute x fois cette fonction
  const executeXtime = (num, myfunction) => {
    for (let i = 0; i < num; i++) {
      myfunction();
    }
  };
  
  // executeXtime appliquée à printB
  // executeXtime(10, printB);
  // executeXtime(5, printA);
  
  // executeXtime appliquée à printA
  
  // 2 * * * * * * * * CALLBACK AVEC PARAMETRES * * * * *
  
  // Ecrivons une fonction isEven qui prend en entrée un num et qui retourne true si c'est multiple de 2 ou sinon false
  
  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  
  // Ecrivons une fonction containGreta qui prend en entree une string et qui retourn true si elle contient le mot "greta"
  
  const containGreta = (myStr) => {
    return myStr.includes("greta");
  };
  
  // Ecrivons une fonction atleastTwoElements qui prend en entrée un tableau et une callback à parametre (qui retourn vrai/faux) et qui retourne true si au moins deux elements du tableau repondent vrai à cette callback
  
  const atleastTwoElements = (myArray, myFunction) => {
    let cpt = 0; // compteur d'éléments du tableau qui répondent true par myFunction
    for (let i = 0; i < myArray.length; i++) {
      if (myFunction(myArray[i])) {
        cpt++;
      }
    }
  
    if (cpt >= 2) {
      return true;
    } else {
      return false;
    }
  };
  
  // console.log(atleastTwoElements([13, 2, 1, 1], isEven));
  // console.log(atleastTwoElements(["toto", "gretaaa", "testgreta"], containGreta));
  
  // Ecrivons une fonction filterArray qui prend en entrée un tableau, une fonction à 1 paramêtre avec boolean, et qui retourne un tableau filtré de cette fonction
  // ==> FILTER
  // ecrivons une fonction qui prend en parametre un tableau, et une callback qui prend en entree un element et retourne vrai / faux, et qui retourne un tableau filtré avec uniquement les elements qui sont vrais lorsqu'ils passent par la callback
  
  const filterArray = (myArray, myCallback) => {
    const finalArray = [];
  
    for (let i = 0; i < myArray.length; i++) {
      if (myCallback(myArray[i])) {
        finalArray.push(myArray[i]);
      }
    }
  
    return finalArray;
  };
  
  console.log(filterArray([13, 2, 1, 1], isEven));
  console.log(filterArray(["toto", "gretaaa", "testgreta"], containGreta));
  
  