/*
Sachant que :
const V = true
const F = false

de tête : quel sera le résultat de :
V && V   - vrai
V && F   - faux
V || F   - vrai
V || !F  -vrai
V && !V  -faux
V & V & V & V & F faux
*/




const toto = false
const tata = true
const nom = "natacha";
let nom2;
const number = 20;
let result = toto && tata
let result1 = !toto;
let result2 = !nom;
let result3 = !number;
let result4 = !nom2

// Fin de votre code

console.log(result); // Doit afficher `false` dans le terminal
console.log(result1); 
console.log(result2); 
console.log(result3); 
console.log(result4); 

