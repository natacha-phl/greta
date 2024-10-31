/*EXERCICE 05
  Output :
  Le produit coûte au moins 100€ ET il est de bonne qualité
*/

let price;
let quality;

// Début de votre code

price = 100;
quality = false;

// Fin de votre code

// L'opérateur && (ET) permet de vérifier plusieurs conditions
if (price >= 100 && quality !== false) {
  console.log(
    "le produit coûte au moins 100€ ET il est de bonne qualité"
  );
} else {
  console.log("Dans tous les autres cas");
}
