/*
EXERCICE 03 : IL N'Y A RIEN A ECRIRE ICI, JUSTE EXECUTER ET CONSTATER

  Objectif de l'exercice :
  Apprendre à ne pas confondre les noms variables et les valeurs de type String.

  Explications :
  Dans cet exemple, nous tentons de concaténer une variable qui se nommerait `e`. Or, aucune variable `e` n'a été déclarée (par let ou const). Nous rencontrons donc une erreur.

  La syntaxe correcte aurait été la suivante :
  const alphabet = "abcd" + "e";
*/

const alphabet = "abcd" + e;

console.log(alphabet); // Affichera `ReferenceError: e is not defined` dans le terminal
