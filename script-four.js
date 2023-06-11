/* In dashboard.html when user click on logout link, 
It will redirect us back to login page. */

document.addEventListener("DOMContentLoaded", function() {
  var logoutLink = document.getElementById("logout");
  logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
});

// External API Configuration
document.addEventListener("DOMContentLoaded", function() {
  var apiConfigForm = document.getElementById("api-config-form");
  apiConfigForm.addEventListener("submit", function(event) {
    event.preventDefault();
    saveApiConfig();
  });

  function saveApiConfig() {
    var apiKeyInput = document.getElementById("api-key");
    var apiUrlInput = document.getElementById("api-url");
    var apiKey = apiKeyInput.value;
    var apiUrl = apiUrlInput.value;
    alert("API Configuration saved successfully!");
  }
});
