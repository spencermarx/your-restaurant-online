// ======================
// LAYOUT - HEADER
// ======================

// Select navbar
const navigation = document.querySelector('.navbar');

// Check page position for navbar
function navScrollCheck() {
  // Get navbar height
  const navHeight = navigation.clientHeight;
  // console.log('Nav Height:', navHeight);

  // Get document scroll location
  const scrollLocation = getScrollY();
  // console.log('Scroll Location:', scrollLocation);

  //  Additional scroll space
  const extraScrollSpace = 30;

  // Toggle class if scrolled below navbar height
  if (scrollLocation - extraScrollSpace > navHeight) {
    return true;
  }
  return false;
}
// Check page position for navbar
function navScrollStyle() {
  const scrolled = navScrollCheck();
  // Toggle class if scrolled below navbar height
  if (scrolled) {
    navigation.classList.add('sm--navbar__scrolled');
  } else {
    navigation.classList.remove('sm--navbar__scrolled');
  }
}

// Load-based style change
// window.onload
window.onload = function() {
  navScrollStyle();
  setNavLinkToActive();
};

// Scroll-based style change
document.addEventListener('scroll', function() {
  navScrollStyle();
});
