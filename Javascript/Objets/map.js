// Description: Given an array of objects representing products, each with properties name, price, and category, use the map() method to create a new array where each product has:

// The name capitalized.
// A new priceWithTax property, calculated with a 20% tax rate.
// A new property category in uppercase.
//Each object should end up with properties name, category, price, and priceWithTax.

// Example Input
const products = [
    { name: "laptop", price: 1000, category: "electronics" },
    { name: "guitar", price: 500, category: "music" },
    { name: "sofa", price: 300, category: "furniture" }
  ];


/*   products.forEach((product)=>{
    product.priceWithTax = product.price *1.2;
    product.category = product.category.toUpperCase();
  }) */



    // tableau de livres : ne sortir que un tableau de noms avec map
const newArray = products.map((product) => {
    return { category : product.category.toUpperCase(),
        priceWithTax : product.price * 1.2,
        name : product.name
    }
  });
  
  // Expected Output
  // [
  //   { name: "Laptop", price: 1000, category: "ELECTRONICS", priceWithTax: 1200 },
  //   { name: "Guitar", price: 500, category: "MUSIC", priceWithTax: 600 },
  //   { name: "Sofa", price: 300, category: "FURNITURE", priceWithTax: 360 }
  // ]

//   console.log(products)

console.log(newArray)