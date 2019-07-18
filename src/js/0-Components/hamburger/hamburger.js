// ======================
// COMPONENT - HAMBURGER
// ======================

// Select Hamburger
const hamburger = document.querySelector('.hamburger');

// Change navbar backgrounds
function toggleNavbarBackgrounds() {
  navigation.classList.toggle('sm--navbar__clear');
  navigation.classList.toggle('sm--navbar__solid');
}

// Handle Navbar State
function handleNavbarState() {
  // Toggle '"is-active" class
  hamburger.classList.toggle('is-active');

  // Check scroll position
  const scrolled = navScrollCheck();

  // If at the top of the page add a solid background to the navbar
  if (!scrolled) {
    toggleNavbarBackgrounds();
  } else {
    toggleNavbarBackgrounds();
  }
}

// Add event listener
hamburger.addEventListener(
  'click',
  function() {
    handleNavbarState();
  },
  false
);
