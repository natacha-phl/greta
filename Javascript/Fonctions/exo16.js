/* EXERCICE 16
  Dans cet exercice vous devrez appeler trois fois la fonction sum avec 3 parametres afin d'afficher 3 resultats différents
*/


const sum = (a, b, c) => {
    // Notez que les noms des variables doivent être uniques. Il ne peut y avoir 2 variables portant le même nom
    return a + b + c;
  };
  
  // Début de votre code

  const result1 =sum(10,10,5)
  const result2 = sum(5,5,5)
  const result3 = sum(3,3,4)
  
  // Fin de votre code
  
  console.log(result1); // Doit afficher `35` dans le terminal
  console.log(result2); // Doit afficher `100` dans le terminal
  console.log(result3); // Doit afficher `7` dans le terminal
  