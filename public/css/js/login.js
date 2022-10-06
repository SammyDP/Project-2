const loginFormHandler = async (event) => {
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to log in");
    }
  }
};

let createProfileHandler = async (event) => {
  event.preventDefault();

  // Gather email and password inputs
  const email = document.querySelector("#new-email").value.trim();
  const password = document.querySelector("#new-password").value.trim();

  if (email && password) {
    // Send post request to create a new user
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        document.location.replace("/createTeam");
      } else {
        alert("Failed to sign up");
      }
    });
  }
};

document
  .querySelector("#create-account")
  .addEventListener("click", createProfileHandler);

document.querySelector("#log-in").addEventListener("click", loginFormHandler);
