// const promiseOne = new Promise(function (resolve, reject) {
//   //async function
//   setTimeout(function () {
//     console.log("Async function is created");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task two");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Asyn 2nd Task");
// });

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "Preetham",
      email: "preetham.rai@unknown.com",
    });
  }, 1000);
});

promiseThree.then(function (u) {
  //   console.log(u);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        userName: "Preetham",
        email: "preetham.rai@unknown.com",
      });
    } else {
      reject("ERROR : Something went wrong");
    }
  });
});

promiseFour
  .then(function (user) {
    // console.log(user);
  })
  .catch(function (error) {
    // console.log(error);
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        userName: "JavaScript",
        email: "preetham.rai@unknown.com",
      });
    } else {
      reject("ERROR : JS went wrong");
    }
  });
});

async function resolvePromiseFive() {
  try {
    const responce = await promiseFive;
    // console.log(responce);
  } catch (error) {
    // console.log(error);
  }
}

resolvePromiseFive();

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (responce) {
    return responce.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((error) => console.log(error));
