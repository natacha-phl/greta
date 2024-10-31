// EXERCICE 5
/*
  L'objectif de cet exercice est d'écrire un fonction qui dessine un bloc de nombre de ligne et nombre de colonnes parametrables :
  -----
  -----
  -----

  Aide :
  Vous aurez besoin de créer une boucle dans une boucle et d'utiliser '\n' pour déclencher des retours à la ligne
*/

const generateString = (height, width) => {
    let str = '' 
  
    // Début de votre code

for (let i=1; i<=height; i++){
    str = str + "\n"


    for (let j=1; j<=width; j++){
        str = str + '-'

    }
}

return str
}

  
    // Fin de votre code

  
  const heightExample = 5
  const widthExample = 5
  console.log(generateString(heightExample, widthExample))
  