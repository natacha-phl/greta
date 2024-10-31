// EXERCICE 22 
// write a function that takes a number as a parameter and displays "I am greater than 100" if the number > 100,
// and displays "I am less than 100" if the number is less than 100

const check100 = num => {

    if (num >= 100) {
         console.log("I am greater than 100")
    } else if ( num < 100) {
         console.log("I am less than 100")
    }

}

check100(120) // displays "I am greater than 100 "
check100(10) // displays "I am less than 100 "
