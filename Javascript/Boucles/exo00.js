// EXERCICE 0
// Complétez la fonction generateString à l'aide d'une boucle For pour afficher les "-" les uns à la suite de l'autre
// Pour cela vous devrez construire la string dans une variable temporaire et lui ajouter petit à petit des "-"

const generateHypens = num => {
    let str = ''
  
    // Début de votre code


        for (let i =1; i<= num; i++){
            str = str + '-' 
            
        } 
        return str
    } 
  
    // Fin de votre code
    
  
  console.log(generateHypens(1)) // Doit afficher `-`
  console.log(generateHypens(2)) // Doit afficher `--`
  console.log(generateHypens(4)) // Doit afficher `----`
  console.log(generateHypens(19)) // Doit afficher `-------------------`