// ======================
// COMPONENT - HAMBURGER
// ======================

// Select Hamburger
var hamburger = document.querySelector(".hamburger");

// Add event listener
hamburger.addEventListener("click", function () {
  // Toggle '"is-active" class
  this.classList.toggle("is-active");
}, false);