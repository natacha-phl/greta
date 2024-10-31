/*EXERCICE 13
  Dans cet exercice vous devrez simplement executer ce script afin de constater qu'une erreur est déclenchée.
*/

const sum = (a, b) => {
    const total = a + b
    console.log(total)
  }
  
  sum(10, 20) // cette execution va bien se passer
  
  // Il n'est pas possible d'avoir accès à la variable `total` car celle-ci n'existe que dans la fonction où elle a été déclaré
  console.log(total) // Déclenchera une erreur `ReferenceError: total is not defined`