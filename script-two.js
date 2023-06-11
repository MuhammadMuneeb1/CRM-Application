// STEP 4: Dashboard 

// Closing Functionality inside Modal Closing and Cancel Buttons.
document.addEventListener("DOMContentLoaded", function() {
  var closeButtons = document.querySelectorAll(".btn-close, .cancel");
  closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function closeModal(modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    var modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalBackdrop) {
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "auto";
  }
});
