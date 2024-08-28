//reversing an array is a mutator method
//it mutates(edits) original array

const sensorData = [
  {
    id: 1,
    date: "20-DEC-2021",
    maxTemp: 34,
    minTemp: 32,
  },
  {
    id: 2,
    date: "22-DEC-2021",
    maxTemp: 31,
    minTemp: 19,
  },
  {
    id: 3,
    date: "24-DEC-2021",
    maxTemp: 32,
    minTemp: 19.5,
  },
  {
    id: 4,
    date: "26-DEC-2021",
    maxTemp: 30,
    minTemp: 18,
  },
];

//lets loop through this and output this in nicely formatted way

for (const data of sensorData.reverse()) {
  //reverse is used on sensorData array
  // console.log(`${data.date} | ${data.maxTemp} | ${data.minTemp}`);
}
// 26-DEC-2021 | 30 | 18
// 24-DEC-2021 | 32 | 19.5
// 22-DEC-2021 | 31 | 19
// 20-DEC-2021 | 34 | 32

//Next to check the word is palindrome or not in the array

const isPalindrome = (word) => {
  let wordArr = [];
  let revWord = [];
  for (const w of word) {
    wordArr.push(w);
    revWord.push(w);
  }
  return wordArr.toString() === revWord.reverse().toString();
};

console.log(isPalindrome("civic") ? "Is a palindrome" : "Not a palindrome");
