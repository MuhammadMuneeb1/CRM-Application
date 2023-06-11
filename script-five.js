// Database Configuration

document.addEventListener("DOMContentLoaded", function() {
  var databaseConfigForm = document.getElementById("database-config-form");
  databaseConfigForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Database configuration saved successfully!");
  });
  
  var logoutLink = document.getElementById("logout");
  logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
});

// Exporting the Database
document.addEventListener("DOMContentLoaded", function() {
    var exportButton = document.querySelector(".export-btn");
    exportButton.addEventListener("click", function() {
      exportData();
    });

    function exportData() {
      var successMessage = "Export completed successfully.";
      showFeedbackModal(successMessage);
    }

    function showFeedbackModal(message) {
      var feedbackModal = document.getElementById("feedbackModal");
      var feedbackMessage = document.getElementById("feedbackMessage");
      feedbackMessage.textContent = message;
      var modal = new bootstrap.Modal(feedbackModal);
      modal.show();
    }
  });

// Settings Page
 document.addEventListener("DOMContentLoaded", function() {
    var settingsForm = document.getElementById("settings-form");
    settingsForm.addEventListener("submit", function(event) {
      event.preventDefault();
      saveSettings();
    });

    function saveSettings() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var timezone = document.getElementById("timezone").value;
      var notifications = document.getElementById("notifications").checked;
      var language = document.getElementById("language").value;
      showFeedbackMessage("Settings saved successfully.");
    }
    function showFeedbackMessage(message) {
      alert("Settings have been saved successfully!");
    }
  });