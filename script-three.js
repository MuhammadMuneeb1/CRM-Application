// Redirecting from Login page to Dashboard.html
document.addEventListener("DOMContentLoaded", function() {
  var signinForm = document.getElementById("signin-form");
  signinForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    window.location.href = "dashboard.html";
  });
});
