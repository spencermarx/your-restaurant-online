// ======================
// COMPONENT - HAMBURGER
// ======================

// Select Hamburger
const hamburger = document.querySelector('.hamburger');

// Add event listener
hamburger.addEventListener(
  'click',
  function() {
    // Toggle '"is-active" class
    this.classList.toggle('is-active');

    // Check scroll position
    const scrolled = navScrollCheck();

    // If at the top of the page add a solid background to the navbar
    if (!scrolled) {
      navigation.classList.toggle('sm--navbar__clear');
      navigation.classList.toggle('sm--navbar__solid');
    } else {
      navigation.classList.toggle('sm--navbar__solid');
      navigation.classList.toggle('sm--navbar__clear');
    }
  },
  false
);
