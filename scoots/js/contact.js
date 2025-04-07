document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const confirmation = document.getElementById("contactConfirmation");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (contactForm.checkValidity()) {
        contactForm.classList.add("hidden");
        confirmation.classList.remove("hidden");
      } else {
        contactForm.reportValidity();
      }
    });
  });