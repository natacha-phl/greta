/*EXERCICE 04
  Objectifs :
  - Appeler la fonction `displayCityAndCountry` en lui transmettant des paramètres.
  - Mémoriser comment déclarer une fonction qui reçoit un ou plusieurs paramètres.
*/

const displayCity = city => {
    console.log(city);
  };
  
  // Appeler la fonction displayCity en lui transmettant la ville de votre choix en parametre
  // Début de votre code


  displayCity ("Antony")
  
  // Fin de votre code
  
  
  // Notez que lorsque la fonction reçoit plus de 1 paramètre, il est nécessaire d'ajouter des parenthèses autour de `city` et `country`
  const displayCityAndCountry = (city, country) => {
    console.log(city); // Doit afficher `Tokyo` dans le terminal
    console.log(country); // Doit afficher `Japon` dans le terminal
  };
  
  
  // Appeler la fonction displayCityAndCountry en lui transmettant les parametres de votre choix
  // Début de votre code

  displayCityAndCountry ("Tokyo", "Japon");
  
  // Fin de votre code
  
  