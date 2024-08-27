//We'll fetch data from the api using async await function

async function userDetails() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// userDetails();
//lets try using .then() and .catch()
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
