// EXERCICE 24
// write a function that takes a number as a parameter and displays "I am an even number" is even,
// and displays "I am an odd number" if the number is odd


const check100 = num => {
    if (num % 2 === 0) {
        console.log('I am an even number')
    } else {
        console.log("I am an odd number")
    }
}

check100(9) // displays "I am an odd number "
check100(8) // displays "I am an even number "
check100(2) // displays "I am an even number "
check100(1133) // displays "I am an odd number "
