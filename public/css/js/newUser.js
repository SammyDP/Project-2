// // Create New Account
// const newUserFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();

//   if (email && password) {
//     // Here we need to update the user database with new user
//     const newUser = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     if (newUser.ok) {
//       // Now they lgoin with the new user information we just created
//       const response = await fetch("/api/users/login", {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: { "Content-Type": "application/json" },
//       });
//       if (response.ok) {
//         // Here we need to direct them to the createTeam page
//         document.location.replace("/");
//       } else {
//         alert("Failed to sign up.");
//       }
//     }
//   }
// };

// document
//   .querySelector(".new-user-form")
//   .addEventListener("submit", newUserFormHandler);
