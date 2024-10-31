// Ecrivez un filtre qui permet de retirer tous les nombres pairs d'un tableau
// utilisez la méthode filter



const array1 = [1,2,3,4,5,6,7,8,9,10]

const OddNumberArray = 

array1.filter((num)=>{
    return num%2 === 1;

})

console.log(OddNumberArray);