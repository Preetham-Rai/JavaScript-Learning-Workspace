//destructuring assigment using objects

const { title, authors } = {
  id: 1,
  title: "Subconcious Mind",
  authors: [
    {
      name: "steve",
    },
    {
      name: "Roberts",
    },
  ],
};
console.log(
  `The ${title} book was written by ${authors.map((e) => e.name).join(" and ")}`
);
