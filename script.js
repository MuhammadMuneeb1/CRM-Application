// STEP 1: Sign-In
document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

// STEP 2: Forget-Password
document
  .getElementById("forgot-password-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email === "example@example.com") {
      document.getElementById("reset-feedback").textContent =
        "Password reset instructions sent!";
      document.getElementById("reset-feedback").classList.add("success");
    } else {
      document.getElementById("reset-feedback").textContent =
        "Invalid email. Please try again.";
      document.getElementById("reset-feedback").classList.add("error");
    }
  });

// STEP 3: Sign-Up
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });