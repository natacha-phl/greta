/*EXERCICE 06

  Rien à écrire, juste constater qu'on passe bien dans la première condition du if bien que quality soit égal à false
*/

const price = 100;
let quality = false;

// L'opérateur || (OU) permet de vérifier plusieurs conditions
if (price >= 100 || quality !== false) {
  console.log("Le produit coûte au moins 100€ OU il est de bonne qualité");
} else {
  console.log("Dans tous les autres cas");
}
