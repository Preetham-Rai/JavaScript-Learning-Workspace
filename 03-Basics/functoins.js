function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const results = addTwoNumbers(1, 2);

// console.log(results);

function userLoggedIn(username) {
  if (username === undefined) {
    return `Please enter a valid username`;
  } else if (username === "") {
    return `Enter a User Name `;
  }
  return `${username} just logged in`;
}

let user = userLoggedIn("Preetham");

// console.log(user);

function cart(...products) {
  return products;
}

let myProducts = cart("ps4", "ps5", "xbox");

// console.log(myProducts);

// functions through objects

const myUser = {
  name: "Preetham",
  email: "preetham.rai@vscode.com",
};

const myUser2 = {
  name: "Sandeep",
  email: "Sandeep.rai@vscode.com",
};

function myFunction(obj) {
  console.log(`Hello my name is ${obj.name} and my mailId is ${obj.email}`);
}

myFunction(myUser2);
myFunction(myUser);
