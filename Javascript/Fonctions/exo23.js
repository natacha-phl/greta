// EXERCICE 23
// write a function that takes a number as parameter and returns true if the number is multiple of 3
// Note : use the operator Modulo


const multipleOf3 = num => {

    if (num % 3 === 0) {
        return true
    } else {
        return false
    }
    
}


console.log(multipleOf3(8))