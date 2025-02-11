// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const confirmationMessage = document.getElementById("confirmation-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form data
      const name = document.getElementById("name").value;
      const activity = document.getElementById("activity").value;
  
      // Display confirmation message
      confirmationMessage.textContent = `Thank you, ${name}! Your registration for ${activity} has been received. We will contact you shortly.`;
      confirmationMessage.style.color = "green";
  
      // Reset form
      form.reset();
    });
  });