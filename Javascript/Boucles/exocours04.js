// EXERCICE COURS 4 écrivez une fonction displayNums qui prend en entrée un nombre numMax, et qui 
// affiche les nombres de 0 à numMax

const displayNums = (numMax) => {

    for (let i=0; i<= numMax; i++){
        console.log(i)
    }

}


displayNums(20)
// exemple : displayNums(3) doit afficher dans le terminal tous les nombres de 0 à 3
// exemple : displayNums(101) doit afficher dans le terminal tous les nombres de 0 à 101