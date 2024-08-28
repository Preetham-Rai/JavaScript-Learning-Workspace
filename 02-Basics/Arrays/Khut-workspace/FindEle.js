const doctors = [
  {
    id: 1,
    name: "Dr. John Mokery",
    age: 31,
    speciality: "General physician",
  },
  {
    id: 2,
    name: "Dr. Dennis Meckellan",
    age: 32,
    speciality: "Cardialogist",
  },
  {
    id: 3,
    name: "Dr. Edward Deeney",
    age: 48,
    speciality: "Oncologist",
  },
  {
    id: 4,
    name: "Dr. Laurene Mandel",
    age: 45,
    speciality: "Dermatologist",
  },
];

const findDoctor = (speciality, arr) =>
  arr.find((ele) => ele.speciality === speciality);
//find() method provides output with the first element that encounters even if we have the other specialists
console.log(findDoctor("Oncologist", doctors));

//includes() method is used to confirm the presence of the element in the array
