const loginBtn = document.querySelector("#login-btn");

const loginHandler = async function (event) {
  event.preventDefault();

  let email = document.querySelector("#login-email").value;
  let password = document.querySelector("#login-password").value;
  // let location = document.querySelector("#login-location").value;
  // let name = document.querySelector("#login-name").value;

  let userData = {
    // first_name: name,
    email: email,
    password: password,
    // location: location,
  };

  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    document.location.replace("/explore");
  } else {
    alert("Failed to login");
  }
};
// Add event listener to login button
loginBtn.addEventListener("click", loginHandler);
