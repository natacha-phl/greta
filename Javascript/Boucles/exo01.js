// EXERCICE 1
const generateString = (num) => {
    let str = "o";
  
    // Début de votre code

    for (let i =0; i<= num; i++){
        str = '-' + str
    }
  
    // Fin de votre code
  
    return str;
  };
  
  console.log(generateString(1)); // Doit afficher `o`
  console.log(generateString(2)); // Doit afficher `-o`
  console.log(generateString(4)); // Doit afficher `---o`
  console.log(generateString(19)); // Doit afficher `------------------o`
  