const books = [
  "The lord of Rings",
  "Deception",
  "Digital Frotress",
  "Freakonomics",
];

const bookTitles = function (ele) {
  console.log(ele.split(" ").reverse().join(" "));
};

books.forEach(bookTitles);
