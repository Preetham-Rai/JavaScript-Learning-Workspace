//check the word is palindrome or not

function isPalindrome(word) {
  function reversedWord(word) {
    return word.split("").reverse().join("");
  }

  if (word === reversedWord(word)) {
    console.log(`The given word ${word} is Palindrome`);
  } else {
    console.log(`The given word ${word} is Not Palindrome`);
  }
}

isPalindrome("heeh");
