/* EXERCICE 21
  Complétez l'écriture de cette fonction afin que lorsqu'on l'appelle ci dessous avec 3 arguments différents, il s'affiche :
  Le mot de passe est manquant
  Le mot de passe est valide
  Le mot de passe est trop court
*/

const checkPassword = password => {
    if (password === undefined) {
      console.log('Le mot de passe est manquant')
    } else {
      // Notez que vous pouvez intégrer une instruction `if` à l'intérieur d'un bloc `if` ou d'un bloc `else`
      // Début de votre code

      let passwordLenght = password.length

      if (passwordLenght >= 6) {
        console.log('Le mot de passe est valide')
      } else if  (passwordLenght < 6) {
        console.log('Le mot de passe est trop court')
      }
      // Fin de votre code
    }
  }
  
  checkPassword() // va afficher le mot de passe est manquant
  checkPassword('azerty') // va afficher le mode passe est valide
  checkPassword('azert') // va afficher le mot de passe est trop court
  