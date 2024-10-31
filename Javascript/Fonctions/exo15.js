/*EXERCICE 15
  Dans cet exercice vous devrez appeler la fonction `sum` avec les parametres num1 et num2, puis avec num3 et num4.
*/

const sum = (a, b) => {
    const total = a + b;
    return total;
  };
  
  let result1;
  let result2;
  const num1 = 15;
  const num2 = 5;
  const num3 = 1;
  const num4 = 2;
  
  // Début de votre code

result1 = sum(num1, num2);
result2 = sum(num3, num4);
  // Fin de votre code
  
  console.log(result1); // Doit afficher `20` dans le terminal
  console.log(result2); // Doit afficher `3` dans le terminal
  