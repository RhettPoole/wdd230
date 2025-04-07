document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const message = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (form.checkValidity()) {
        form.classList.add("hidden");
        message.classList.remove("hidden");
      } else {
        form.reportValidity();
      }
    });
  });