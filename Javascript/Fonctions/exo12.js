/*EXERCICE 12
  Dans cet exercice vous ne devrez pas coder !
  Vous devrez expliquer pourquoi une erreur est déclenchée.
*/

const name = 'Pierre'

const showName = () => {
  console.log(name) // Affichera `Pierre`, ne déclenche pas d'erreur
  const fullName = 'Pierre Malleret'
}

showName()

console.log(fullName) // Déclenchera une erreur `ReferenceError: fullName is not defined`

// Ici pas de code. Essayez d'expliquer avec vos mots, pourquoi l'erreur est apparue.