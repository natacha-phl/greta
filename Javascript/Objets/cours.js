//  * * * * * Déclaration d'un objet * * * * *

const bike1 = {
    brand: "elops",
    size: "L",
    price: 300,
    wheels: "29",
    type: "city",
    user: {
      name: "pierre",
      age: 39,
      addresses: [
        {
          numero: 200,
          street: "avenue garbadli",
          zipcode: "93210",
        },
        {
          numero: 100,
          street: "avenue de la liberte",
          zipcode: "93210",
        },
      ],
    },
  };
  
  const bike2 = {
    brand: "peugot",
    size: "M",
    price: 500,
    wheels: "32",
    type: "course",
    user: {
      name: "tim",
      age: 30,
    },
  };
  
  //  * * * * * Lecture de valeurs * * * * *
  
console.log(bike1.brand);
  // console.log(bike2.brand);
  
  // deux manières d'appeler la valeur d'une clé :
  // .brand
  // ["brand"]
  // console.log(bike1["price"]);
  
  // appel dans une structure complexe
  // ajout de users dans le modèle (name, age, address)
  
  // cherchons l'age du user du bike1
  // console.log(bike1.user.age);
  // cherchons le numero de rue de la premiere adresse du user du bike 1
  // console.log(bike1.user.addresses[0].numero);
  
  //  * * * * * Modifier une valeur * * * * *
  
  // console.log("avant modification", bike2);
  bike1.price = 400;
  // console.log(bike1);
  
  // ajouter une clé
  bike1.color = "black";
  
  // supprimer une clé / valeur
  delete bike1.type;
  // console.log(bike1);
  
  //  * * * * *  Object.keys * * * * *
  
  // * * * * *  boucler sur un objet * * * * *
  
  // for in sert a boucler dans les clés d'un objet de manière plus rapide
  for (key in bike1) {
     console.log(key, bike1[key]); // pour afficher la valeur d'une clé ici, sachant que la clé est représentée par une variable, on doit faire l'appel avec []
  }
  
  // TABLEAU D'OBJET
  
  const books = [
    {
      author: "jules vernes",
      title: "tour du monde",
      price: 10,
    },
    {
      author: "albert camus",
      title: "l'etranger",
      price: 7,
    },
    {
      author: "JK Rollings",
      title: "Harry Potter et la coupe de feu",
      price: 30,
    },
  ];
  
  // tableau de livres : Filtrer ceux inférieurs à 10Eur avec filter
  
  const booksfiltered = books.filter((book) => {
    return book.price < 10;
  });
  
  // console.log("booksfiltered", booksfiltered);
  
  // tableau de livres : ajouter une clé avec forEach
  
  books.forEach((book) => {
    book.editor = "gallimard";
  });
  
  // console.log(books);
  
  // tableau de livres : ne sortir que un tableau de noms avec map
  const namesList = books.map((book) => {
    return book.title;
  });
  console.log(namesList);
  
  // tableau de livres : sortir le total des prix avec REDUCE ?
  
  