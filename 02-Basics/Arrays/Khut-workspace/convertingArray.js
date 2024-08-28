//using string.split() and array.join()

const str = "House No. 98, Philip street, Mnagrove drive, Timberville-800123";

// console.log(str.split(", "));

// [
//     'House No. 98',
//     'Philip street',
//     'Mnagrove drive',
//     'Timberville-800123'
//   ]

//Array.join();

const greet = ["Hello", "How are you?", "It is so nice to meet you again!"];

// console.log(greet.join(" ")); Hello How are you? It is so nice to meet you again!

//Activity to sort it into readable array from csv file

const users = `id,first_name,last_name,email,gender
1,Brigg,Kauscher,bkauscher@nsw.au,Male
2,Saudra,Madner,smadner@mac.com,Female
3,Willy,Birchwood,wbirchwood@typepad.com,Female
4,Jaime,Abethell,jabethell@amazonaws.com,Male
5,Kristofer,Gunton,kgunton4@globo.com,Male`;

//this is the csv file

const csvToArray = (csv) => {
  let output = [];
  //   for (const row of csv.split("\n")) {
  //     output.push(row.split(","));
  //   }
  csv.split("\n").forEach((row) => output.push(row.split(",")));
  return output;
};

console.log(csvToArray(users));
