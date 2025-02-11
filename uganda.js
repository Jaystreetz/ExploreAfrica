// script.js
// Add interactivity like a dynamic image slider or button effects
document.addEventListener("DOMContentLoaded", function () {
    // Example: Add a hover effect to attractions
    const attractions = document.querySelectorAll(".attraction");
    attractions.forEach((attraction) => {
      attraction.addEventListener("mouseover", () => {
        attraction.style.transform = "scale(1.05)";
        attraction.style.transition = "transform 0.3s ease";
      });
      attraction.addEventListener("mouseout", () => {
        attraction.style.transform = "scale(1)";
      });
    });
  });
  