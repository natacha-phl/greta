// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const peopleWhoBelongToTheIlluminati = arr => {
  // your code here

  return arr.filter((celebrity) => {
    return celebrity.member
  });
};
// test
console.log(
  peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
  ])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]
