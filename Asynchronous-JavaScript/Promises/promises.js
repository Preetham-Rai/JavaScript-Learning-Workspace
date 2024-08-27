// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "Preetham",
//         email: "Preetham@Pree.com",
//       });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseOne
//   .then(function (user) {
//     console.log(user);
//     return user.username[0];
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//     console.log("Your task is either completed or rejected");
//   });

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "JavaScript",
        email: "Preetham@Pree.com",
      });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function myFunction() {
  try {
    const response = await promiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
