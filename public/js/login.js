const loginFormHandler = async (event) => {
  // event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  // event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);

function isContractor() {
  // Get the checkbox
  var checkBox = document.getElementById("contractorCheck");
  // Get the buisness name
  var company = document.getElementById("company");
  // Get phone number
  var phone = document.getElementById("phone");

  // If the checkbox is checked, display the input boxes for company and phone number
  if (checkBox.checked == true) {
    company.style.display = "block";
    phone.style.display = "block";
  } else {
    company.style.display = "none";
    phone.style.display = "none";
  }
}
