// ======================
// LAYOUT - HEADER
// ======================

// FIXME: Run event on page load/reload as well
// TODO: Create auto-switch

// Scroll-based style change
document.addEventListener('scroll', function() {
  // Select navbar
  const navigation = document.querySelector('.navbar');

  // Get navbar height
  const navHeight = navigation.clientHeight;
  console.log('Nav Height:', navHeight);

  // Get document scroll location
  const scrollLocation = this.documentElement.scrollTop;
  console.log('Scroll Location:', scrollLocation);

  //  Additional scroll space
  const extraScrollSpace = 30;

  // Toggle class if scrolled below navbar height
  if (scrollLocation - extraScrollSpace > navHeight) {
    navigation.classList.add('sm--navbar__scrolled');
  } else {
    navigation.classList.remove('sm--navbar__scrolled');
  }
});
